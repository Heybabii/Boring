FROM node:12.13-buster

RUN mkdir -p /app/webapp && chown -R node:node /app/webapp

# COPY webapp/package*.json app

COPY webapp /app/webapp

WORKDIR /app/webapp

RUN chmod 777 /app/webapp/db.json && npm install

USER node

EXPOSE 8000

CMD [ "npm", "start" ]