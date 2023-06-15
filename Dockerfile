FROM node:lts-alpine

WORKDIR /servicio
COPY . /servicio

# ENV PORT 8081
EXPOSE 8000

RUN npm install -g nodemon 
RUN npm install

ENTRYPOINT ["nodemon", "servicio/app.js"]
