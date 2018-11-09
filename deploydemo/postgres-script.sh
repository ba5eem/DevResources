#!/bin/bash

# save container id to txt file
docker inspect --format={{.Id}} deploydemo_db_1 > db_id.txt

# set container id to variable
dbid=`cat db_id.txt`

# delete file - to keep things clean
rm db_id.txt



# remind user of postgres commands


# excecute postgres-cli
docker exec -it $dbid psql dbname -U dbuser
