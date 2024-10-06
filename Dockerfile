# Build Stage
FROM node:latest as build-stage

WORKDIR /article-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Command to start the application
CMD ["npm", "start"]