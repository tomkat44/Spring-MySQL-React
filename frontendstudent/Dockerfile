# FROM node:18-alpine as build

# ARG VITE_BACKEND_HOST
# ENV VITE_BACKEND_HOST=$VITE_BACKEND_HOST

# WORKDIR /app

# COPY package.json package-lock.json ./

# RUN npm install

# COPY . .

# COPY src ./src

# RUN npm run build

# # Run the app in a minimal nginx container

# FROM nginx:1.25.1

# #COPY --from=build /app/dist /usr/share/nginx/html

# #COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

####################################################
# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Build the React app
RUN npm run build

# Start the React application
CMD ["npm", "start"]

# #If I waant nginx COMMENT the EXPOSE3000 and CMD nmo=p.. above and uncomment the under
# # Serve stage
# FROM nginx:1.25.1

# # Copy the custom nginx.conf file to the container
# COPY .docker/nginx.conf /etc/nginx/nginx.conf

# # Copy the built React app from the build stage to the nginx container
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]