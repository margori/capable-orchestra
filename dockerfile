FROM node:alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm i

COPY index.js /app

ARG VERSION
ENV VERSION=${VERSION}

CMD ["node", "./index.js"]
