# Use Node.js base image
FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source files (including API routes)
COPY . . 

RUN npm run build

CMD ["npm", "run", "start"]
