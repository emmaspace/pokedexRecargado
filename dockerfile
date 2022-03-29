FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install 
RUN npm install -g @angular/cli@13.2.5
COPY . /app
CMD ng serve --host 4200
