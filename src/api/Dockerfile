FROM node:13-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV DATABASE_PASSWORD ${DATABASE_PASSWORD}
ENV DATABASE_USER ${DATABASE_USER}

COPY . .

CMD ["node", "index"]
