# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Expose port your API runs on (example: 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
