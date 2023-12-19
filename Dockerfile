# Use an official Node.js runtime as a parent image
FROM node:18-alpine3.17

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "run", "start:dev"]
