# Build Angular SSR app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ------------------------------

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY package*.json ./

ENV NODE_ENV="production"
EXPOSE 4000

CMD ["node", "dist/personal-blog-resume/server/main.js"]
