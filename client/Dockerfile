FROM node:20.8.1-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
ENV SERVER_UTXO_URI=http://127.0.0.1:7000/utxos
EXPOSE 8080
CMD ["npm", "run", "dev"]