# ------------------------
# Stage 1: Builder
# ------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Abhängigkeiten installieren
COPY package*.json ./
RUN npm ci

# Quellcode kopieren und Production-Build erzeugen
COPY . .

# Build mit dem im angular.json hinterlegten outputPath
RUN npm run build -- --configuration=production


# ------------------------
# Stage 2: Nginx-Server
# ------------------------
FROM nginx:1.25-alpine

# Altes html-Verzeichnis leeren
RUN rm -rf /usr/share/nginx/html/*

# Nur den Inhalt von dist/baugruppen-config kopieren
COPY --from=builder /app/dist/baugruppen-config/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]