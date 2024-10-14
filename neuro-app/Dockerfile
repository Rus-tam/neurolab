# Используем Python образ
FROM python:3.9

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы приложения
COPY . .

# Устанавливаем зависимости
RUN pip install --upgrade pip && pip install -r requirements.txt && pip install --no-cache-dir tensorflow-intel


# Открываем порт 8000 для FastAPI
EXPOSE 8000

# Запуск FastAPI с uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
