#!/bin/bash

RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[93m"
CYAN="\033[96m"
BOLDUNDERLINE="\033[1;4m"



# listen for ctrl_c during process - call the func
trap ctrl_c INT




# Ask the user for their name
echo ${YELLOW}Aloha, today we are going to setup your Docker Environment [${GREEN}Enter to Contine/${RED}ctrl-c to exit${YELLOW}]
read name
echo ${GREEN}Great! Lets begin, enter your Docker username?
read username
echo ${YELLOW}Welcome $username!
echo ${GREEN}Now enter your project name[${RED}lowercase only${GREEN}]?
read projectname
mkdir $projectname
(cd ./$projectname && npm init -y)
echo ${CYAN}Okay, so it will be called $username/$projectname:0.0.1-local


function ctrl_c() {
  (cd ./$projectname && docker-compose down -v)
  rm -rf $projectname
  echo "${RED}${BOLDUNDERLINE}**** You have exited during mid process, sorry to see you leave ****"
  echo "${RED} We removed all files that were created from this script"
  echo "${GREEN} You can start over again...just run script"
  exit 1
}

echo "version: '3'
services:
  $projectname:
    image: $username/$projectname:0.0.1-local
    depends_on:
      - db
    command: ["npx", "nodemon", "app.js"]
    container_name: $projectname
    volumes:
      - ".:/app/:rw"
    env_file: .env
    environment:
      NODE_ENV: development
    ports:
      - "'${EXPRESS_HOST_PORT}:${EXPRESS_CONTAINER_PORT}'"
    networks:
      - my-app-network
  db:
    image: postgres:10.0-alpine
    env_file: .env
    volumes: 
      - pg-data-volume:/var/lib/postgresql/data
    ports: 
      - "'${POSTGRES_HOST_PORT}:${POSTGRES_CONTAINER_PORT}'"
    networks:
      - my-app-network
  redis:
    image: redis:4.0-alpine
    env_file: .env
    volumes:
      - redis-data-volume:/data
    ports:
      - "'${REDIS_HOST_PORT}:${REDIS_CONTAINER_PORT}'"
    networks:
      - my-app-network
volumes: 
  pg-data-volume:
  redis-data-volume:
networks:
  my-app-network:
" > ./$projectname/docker-compose.override.yml

echo "version: '3'
services:
  $projectname:
    image: $username/$projectname:0.0.1
    environment:
      NODE_ENV: production" > ./$projectname/docker-compose.prod.yml

echo "version: '3'
services:
  $projectname:
    build: .
    image: $username/$projectname:local" > ./$projectname/docker-compose.yml

echo "# Built from Node latest Alpine
FROM node:10.0

# Specify an optional argument with a default value
ARG app_directory=/app

# Set the app directory as the context for all commands and entry to the container
WORKDIR "'${app_directory}'"

# ONLY copy over the package.json to install NPM packages
COPY package.json .

# Install node module dependencies
RUN npm install

# Add the rest of the project files(most builds will start from here based on cache)
COPY . .

# Start the node application as you normally would
CMD ["node", "app.js"]
" > ./$projectname/Dockerfile


echo "IMAGE_VERSION=0.0.5

EXPRESS_CONTAINER_PORT=8989
EXPRESS_HOST_PORT=8989

POSTGRES_HOST_PORT=8765
POSTGRES_CONTAINER_PORT=5432
POSTGRES_HOSTNAME=db 
POSTGRES_USER=dbuser
POSTGRES_PASSWORD=dbpassword
POSTGRES_DB=dbname

REDIS_HOST_PORT=6379
REDIS_CONTAINER_PORT=6379

"> ./$projectname/.env

echo "node_modules
.env" > ./$projectname/.gitignore

(cd ./$projectname && rm package.json)

echo '{
  "name": "dockernodeproject",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "migrate": "POSTGRES_HOSTNAME=localhost POSTGRES_CONTAINER_PORT=8765 npx knex migrate:latest",
    "seed": "POSTGRES_HOSTNAME=localhost POSTGRES_CONTAINER_PORT=8765  npx knex seed:run",
    "flushdb": "POSTGRES_HOSTNAME=localhost POSTGRES_CONTAINER_PORT=8765 npx knex migrate:rollback ; POSTGRES_HOSTNAME=localhost POSTGRES_CONTAINER_PORT=8765 npx knex migrate:latest ; POSTGRES_HOSTNAME=localhost POSTGRES_CONTAINER_PORT=8765 npx knex seed:run",
    "redis": "echo \"Opening Redis CLI\" && sh redis-script.sh",
    "postgres": "echo \"Opening Postgres CLI\" && sh postgres-script.sh",
    "destroy": "echo \"Docker compose down is running...\" && docker-compose down -v"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^2.0.0",
    "body-parser": "^1.18.2",
    "bookshelf": "^0.13.3",
    "connect-redis": "^3.3.3",
    "dotenv": "^6.0.0",
    "express": "^4.16.3",
    "express-session": "^1.15.6",
    "knex": "^0.14.6",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0",
    "pg": "^7.4.1"
  },
  "devDependencies": {
    "nodemon": "^1.18.4"
  }
}' > ./$projectname/package.json

echo "require('dotenv').config()
const PORT = process.env.EXPRESS_HOST_PORT

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session)
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');


const app = express();

app.get('/', (req,res) => {
	res.json('Welcome to your Home');
});


app.listen(PORT, () => {
  console.log("'`Listening on port: ${PORT}`'")
});" > ./$projectname/app.js

# create redis-cli script
echo "#!/bin/bash

# save container id to txt file
docker inspect --format="{{.Id}}" ${projectname}_redis_1 > redis_id.txt

# set container id to variable
redisid="'`cat redis_id.txt`'"

# delete file - to keep things clean
rm redis_id.txt

# excecute redis-cli
docker exec -it "'$redisid'" redis-cli" > ./$projectname/redis-script.sh

# create postgres-cli script
echo "#!/bin/bash

# save container id to txt file
docker inspect --format="{{.Id}}" ${projectname}_db_1 > db_id.txt

# set container id to variable
dbid="'`cat db_id.txt`'"

# delete file - to keep things clean
rm db_id.txt



# remind user of postgres commands


# excecute postgres-cli
docker exec -it "'$dbid'" psql dbname -U dbuser" > ./$projectname/postgres-script.sh


# cd into new dir and install all npm packages
(cd ./$projectname && npm install)

# compose up and build dockerfile -d to keep it hidden
(cd ./$projectname && docker-compose up --build -d)

# save container id to txt file
(cd ./$projectname && docker inspect --format="{{.Id}}" $projectname) > container_id.txt

# set container id to variable
id=`cat container_id.txt`

# exec into container
echo "Copy and paste: ${CYAN}'npm install --save bcrypt && exit'"
(cd ./$projectname && docker exec -it $id bash)

# remove file from dir 
rm container_id.txt

# open browser to express landing page
echo "${YELLOW}Opening browser to express landing page at http://localhost:8989"
# initialize knex in project directory
(cd ./$projectname && knex init)

# confirm knex init ran
echo "${RED}knex init was run in your directory"
# open browser to serve landing page
open http://localhost:8989
# confirm project complete
echo "${CYAN}$username/$projectname setup complete"
# starting app takes longer than bash script to run
echo "${RED}You might have to refresh the browser once"
# output Datasbase creditials:

echo "${RED}Database Creditials:" 
echo "${CYAN}username: ${GREEN}dbuser" 
echo "${CYAN}password: ${GREEN}dbpassword" 
echo "${CYAN}DB Name: ${GREEN}dbname" 

# allow user to change .env file
echo "${RED}You can change database creditials in your .env file"


# go into directory
echo "${GREEN}cd into $projectname"

# provide user npm run scripts
echo "${YELLOW}The following scripts were added for your convenience:"
echo "${CYAN}npm run redis - This script will enter the redis cli for you"
echo "${CYAN}npm run postgres - This script will enter the postgres cli for you"
echo "${RED}npm run destroy - ${BOLDUNDERLINE}WARNING!!!This script will run the docker-compose down -v command"



exit 1
















