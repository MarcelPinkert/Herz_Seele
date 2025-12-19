FROM node:20-alpine

WORKDIR /app

# Dependencies zuerst (good caching xD)
COPY package*.json ./
RUN npm ci

# rest of zhe code
COPY . .

# SQLite DB pers in cont.

# Port
EXPOSE 3000

CMD ["node", "server.js"]