FROM node:alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY ./package.json .
COPY ./package-lock.json .

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Attempt to install dependencies
RUN npm install

# Start the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0"]