FROM node:alpine

RUN apk add curl

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm i

COPY *.js /app/

ARG VERSION
ENV VERSION=${VERSION}

CMD ["node", "./index.js"]
