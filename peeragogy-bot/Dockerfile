FROM node:18

WORKDIR /app
COPY ./chatbot_deploy/peeragogy-bot/package*.json ./
RUN npm install
COPY ./chatbot_deploy/peeragogy-bot/ ./

RUN npm install
EXPOSE 3000

CMD ["npm", "run", "start"]
