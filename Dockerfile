# Install latest Node
FROM node:latest

# Create app directory
WORKDIR /app

# Transfer package.json
COPY ./package*.json ./

# Install packages
RUN npm install

# Copy app source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Run app
CMD ["npm", "start"]