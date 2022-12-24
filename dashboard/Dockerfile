FROM node:19.2-alpine

WORKDIR /app

COPY package.json ./


RUN npm i

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]