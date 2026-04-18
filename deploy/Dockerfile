# Stage 1: Build React + Slidev
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files first for layer caching
COPY web/package.json web/package-lock.json ./web/
RUN cd web && npm ci

# Copy source files
COPY web/ ./web/
COPY docs/ ./docs/

# Sync markdown modules to public directory for runtime fetch
RUN cp -r docs/modules web/public/modules

# Build Slidev slides first (output to public/slides/)
RUN cd web && npx slidev build slides/S-M01.md --base /slides/S-M01/ --out ../public/slides/S-M01 \
 && npx slidev build slides/S-M03.md --base /slides/S-M03/ --out ../public/slides/S-M03 \
 && npx slidev build slides/S-M04.md --base /slides/S-M04/ --out ../public/slides/S-M04 \
 && npx slidev build slides/S-M05.md --base /slides/S-M05/ --out ../public/slides/S-M05

# Build React app (includes slides in dist/)
RUN cd web && npx vite build

# Stage 2: Runtime (Node + Express + SQLite)
FROM node:22-alpine
WORKDIR /app

# Install server deps (better-sqlite3 needs node-gyp but wheel is usually prebuilt for alpine)
RUN apk add --no-cache python3 make g++ \
 && ln -sf python3 /usr/bin/python
COPY server/package.json ./server/
RUN cd server && npm install --omit=dev && npm cache clean --force

# Copy server code and built static
COPY server/ ./server/
COPY --from=build /app/web/dist ./public

ENV NODE_ENV=production
ENV PORT=3000
ENV DB_PATH=/data/cit.db
ENV PUBLIC_DIR=/app/public

EXPOSE 3000
CMD ["node", "server/index.js"]
