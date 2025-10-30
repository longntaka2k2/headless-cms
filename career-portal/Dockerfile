FROM node:16-alpine as BASE
LABEL author="anhlbt"

WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --no-cache git

RUN npm install -g npm@8.19.4
RUN npm ci

# Build Image
FROM node:16-alpine AS BUILD
LABEL author="anhlbt"

RUN apk add --no-cache curl \
  && curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bin \
  && apk del curl

WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN apk add --no-cache git curl \
  && npm run build \
  && cd .next/standalone \
  && node-prune

# Build production
FROM node:16-alpine AS PRODUCTION
LABEL author="anhlbt"
ENV ENVIRONMENT=start:staging
WORKDIR /app

COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/next.config.js ./

# Set mode "standalone" in file "next.config.js"
COPY --from=BUILD /app/.next/standalone ./
COPY --from=BUILD /app/.next/static ./.next/static
#COPY entrypoint.sh .

# Execute script
RUN apk add --no-cache --upgrade bash
#RUN ["chmod", "+x", "./entrypoint.sh"]
#ENTRYPOINT ["./entrypoint.sh"]
EXPOSE 3000

CMD ["node","server.js"]
