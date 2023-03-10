FROM node:alpine
WORKDIR /usr/src/client
COPY package.json .
RUN npm cache clean --force
RUN npm install
COPY src ./src
COPY public ./public
EXPOSE 3000
CMD [ "npm", "start" ]