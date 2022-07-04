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
$ docker-compose down
```

## Consume servers

```
$ node simulate http://localhost:3000 200
$ node simulate http://localhost:3001 200
$ node simulate http://localhost:3002 200
```

## Use docker swarm with docker-compose file

```
$ docker swarm init
$ docker stack deploy --compose-file docker-compose.swarm.yaml capable-orchestra
$ docker stack rm capable-orchestra
```

## Use minikube with helm chart

Requirements:

- Minikube https://minikube.sigs.k8s.io/
- Helm https://helm.sh/

```
$ minikube start
$ minikube addons enable registry
$
$ export VERSION=4
$ docker build -t crappy-server:latest --build-arg VERSION=$VERSION .
$ docker tag crappy-server:latest localhost:49155/crappy-server:$VERSION
$ docker build -t localhost:49155/crappy-server:$VERSION --build-arg VERSION=$VERSION .
$ docker push localhost:49155/crappy-server:$VERSION
$
$ helm install capable-orchestra .
$ helm upgrade capable-orchestra .

$ kubectl exec -ti pod/simulator-64b65d5c4b-nsrdh -- sh

```
