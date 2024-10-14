# Используем Node.js образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Устанавливаем Nest CLI глобально
RUN npm install -g @nestjs/cli

# Копируем остальные файлы
COPY . .

# Собираем приложение
RUN npm run build

# Команда для запуска миграций (если используется TypeORM или другой инструмент для миграций)
# Пример для TypeORM:
# RUN npm run typeorm migration:run

# Открываем порт 3001 для сервера NestJS
EXPOSE 5000

# Запуск приложения
CMD ["npm", "run", "start:prod"]
