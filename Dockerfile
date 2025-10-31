# ========== СТАДИЯ 1: Сборка frontend ==========
FROM node:20 AS frontend

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# ========== СТАДИЯ 2: Сборка backend ==========
FROM node:20 AS backend

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY server/package*.json ./
RUN npm install

# Теперь копируем исходники бэкенда
COPY server ./

# Копируем собранный фронтенд в public/
COPY --from=frontend /app/frontend/dist ./public

EXPOSE 3001

# Используем CMD (а не RUN) для запуска
CMD ["npm", "start"]
