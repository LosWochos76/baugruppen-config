#!/bin/bash

set -e

IMAGE_NAME="stuckenholz/baugruppen-config"
TAG="latest"

echo "🔧 Baue Angular-App mit Docker..."
docker build -t ${IMAGE_NAME}:${TAG} .

echo "✅ Build abgeschlossen."

echo "🔐 Docker Login (falls noch nicht eingeloggt)..."
docker login

echo "🚀 Pushe Image nach Docker Hub: ${IMAGE_NAME}:${TAG} ..."
docker push ${IMAGE_NAME}:${TAG}

echo "✅ Push abgeschlossen."