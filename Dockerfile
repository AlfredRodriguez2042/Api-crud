FROM node as myserver

WORKDIR /app

COPY . .

RUN npm install
