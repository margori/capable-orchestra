# capable-orchestra

Show case of several orchestration softwares handling low quality web servers

## Build image with docker

```
$ export VERSION=1
$ docker build -t crappy-web-server:$VERSION --build-arg VERSION=$VERSION .
```

## Use docker-compose

```
$ docker-compose up -d
```

## Consume servers

```
$ node simulate http://localhost:3000 200
$ node simulate http://localhost:3001 200
$ node simulate http://localhost:3002 200
```
