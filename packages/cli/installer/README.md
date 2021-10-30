# Docker container for build installer for ubuntu(debian) & windows

open terminal in current directory
```
docker-compose run web
```
in docker container
```
chmod -R 777 ../..
oclif-dev pack:deb
oclif-dev pack:win
```


