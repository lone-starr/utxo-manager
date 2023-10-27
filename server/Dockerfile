FROM node:20.8.1-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 7000
CMD ["node", "server"]