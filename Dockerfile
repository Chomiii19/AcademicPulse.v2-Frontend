# Use an official Node image to build the app
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app’s code
COPY . .

# Build the app
RUN npm run build

# Use an Nginx image to serve the built files
FROM nginx:alpine

# Copy the build files to Nginx’s default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to access the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
