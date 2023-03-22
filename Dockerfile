# Base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install --silent

# Copy the app
COPY . ./

# Build the app
RUN npm run build

# Serve the app
CMD ["npm", "start"]
