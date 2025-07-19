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

RUN npm run build -- --configuration=production


# ------------------------
# Stage 2: Nginx-Server
# ------------------------
FROM nginx:1.25-alpine

# Altes html-Verzeichnis leeren
RUN rm -rf /usr/share/nginx/html/*

# Angular-Build kopieren
COPY --from=builder /app/dist/baugruppen-config/ /usr/share/nginx/html/

# nginx-Konfiguration hinzufügen
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]