# Stage 1: Build
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

# Stage 2: Serve
FROM nginx:alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web/dist /usr/share/nginx/html
EXPOSE 80
