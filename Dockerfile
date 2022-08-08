# Stage 0 - Build Frontend Assets
FROM node:17.3.0-alpine as build
ARG API_URL 

RUN apk add --no-cache git
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN sh create-env-file.sh REACT_APP_API_URL=$API_URL
CMD ["cat", ".env"]
RUN yarn run build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli:v1.12.2

WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
