FROM nodered/node-red:latest

USER root
WORKDIR /data

COPY package.json /data/package.json
RUN npm install --omit=dev

COPY settings.js /data/settings.js
COPY flows.json /data/flows.json
COPY flows_cred.json /data/flows_cred.json

RUN chown -R node-red:node-red /data

USER node-red
EXPOSE 1880

CMD ["npm", "start"]
