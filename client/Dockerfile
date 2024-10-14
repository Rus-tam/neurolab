# Этап 1: Сборка приложения
FROM node:18 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Собираем проект Vite
RUN npm run build

# Этап 2: Сервер Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию для Nginx (если нужно настроить, иначе используется дефолтная)
# COPY nginx.conf /etc/nginx/nginx.conf

# Открываем порт 80 для доступа к приложению
EXPOSE 3000

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
