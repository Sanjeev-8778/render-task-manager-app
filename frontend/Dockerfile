# 1. Use official Node.js image for build
FROM node:18-alpine AS build

# 2. Set working directory
WORKDIR /app

# 3. Copy dependencies and install
COPY package*.json ./
RUN npm install

# 4. Copy rest of the code and build
COPY . .
RUN npm run build

# 5. Use nginx to serve build output
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
