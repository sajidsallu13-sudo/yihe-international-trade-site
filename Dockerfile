# Stage 1: Build backend and frontend
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy app files
COPY . .

# Build Next.js frontend
RUN npm run build:frontend

# Stage 2: Runtime
FROM node:18-alpine
WORKDIR /app

# Copy dependencies from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Copy server files
COPY server ./server

# Expose ports (frontend uses 3000, backend 4000)
EXPOSE 4000

# Start the Express backend (frontend served separately or integrated)
CMD ["node", "server/index.js"]
