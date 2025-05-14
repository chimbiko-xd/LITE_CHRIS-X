# Use Node.js LTS as base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the bot files
COPY . .

# Start the bot
CMD ["node", "index.js"]

