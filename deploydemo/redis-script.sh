#!/bin/bash

# save container id to txt file
docker inspect --format={{.Id}} deploydemo_redis_1 > redis_id.txt

# set container id to variable
redisid=`cat redis_id.txt`

# delete file - to keep things clean
rm redis_id.txt

# excecute redis-cli
docker exec -it $redisid redis-cli
