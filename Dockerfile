FROM node:20.18.0-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD node server