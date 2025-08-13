[![React](https://img.shields.io/badge/React-19.0-blue)](https://reactjs.org)
[![Redux](https://img.shields.io/badge/Redux-4.x-purple)](https://redux.js.org)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)](https://www.mongodb.com)

Полнофункциональный интернет-магазин с фронтендом на React/Redux и бэкендом на Node.js с MongoDB.

## 📌 Основные технологии

### Frontend

-   React 19
-   Redux (с Redux Thunk для асинхронных действий)
-   React Router v6 для навигации
-   React Hook Form для форм
-   Yup для валидации
-   PropTypes для проверки типов
-   Axios для HTTP-запросов
-   SCSS для стилизации

### Backend

-   Node.js + Express
-   MongoDB (с Mongoose ODM)
-   JWT аутентификация
-   Docker для контейнеризации

## 🚀 Установка и запуск

### Предварительные требования

-   Node.js v18+
-   MongoDB (локально или облачная версия)
-   Docker (опционально)

### 1. Клонирование репозитория

```bash
git clone https://github.com/ваш-репозиторий/el-technik.git
cd el-technik
```

### Структура проекта

├── backend/ Node.js сервер
│ ├── config/ Конфигурации (DB, JWT)
│ ├── controllers/ Логика обработки запросов
│ ├── models/ Mongoose модели
│ ├── routes/ API endpoints
│ ├── middleware/ Промежуточное ПО
│ ├── utils/ Вспомогательные функции
│ └── server.js Запуск сервера

├── frontend/ React приложение
│ ├── public/ Статические файлы
│ ├── src/
│ │ ├── assets/ Изображения, стили
│ │ ├── components/ UI компоненты
│ │ ├── actions/ активация запросов
│ │ ├── api / api для получения продуктов
│ │ ├── pages/ Страницы приложения
│ │ ├── layouts/ Основные слои для страниц
│ │ ├── store/ Redux store
│ │ ├── reducers/ вспомогательные функции для Redux store
│ │ ├── styles/ стили проекта
│ │ ├── App.js Главный компонент
│ │ └── main.js Точка входа
│ └── ...
