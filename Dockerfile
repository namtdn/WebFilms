FROM node:10

RUN mkdir /app

WORKDIR . /app

COPY ./package.json

ENV NODE_PORT 6060

RUN npm install

EXPOSE ${NODE_PORT}

CMD ["npm", "start"]
