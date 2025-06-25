# Stage 1: Build Angular App
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built app from previous stage
COPY --from=builder /app/dist/savitasoft /usr/share/nginx/html

# Optional: Custom Nginx config for Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Nginx default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
