require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const { log } = console;

// Импортируем маршруты
const productRoutes = require("./routes/productRoutes");

// подключение express
const app = express();

// Middleware (промежуточный слой)
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use("/images", express.static("./images"));

// Подключаем маршруты для продуктов
app.use("/elmag", productRoutes);

// подключение маршрутов для регестрации пользователя
const userReg = require("./routes/userReg");
app.use("/elmag", userReg);

// вход пользователя
const authUser = require("./routes/userLogin");
app.use("/elmag", authUser);

// порт
const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    await connectDb();
    app.listen(PORT, () => {
      log(`🚀 Сервер запущен на порту ${PORT}`);
    });
  } catch (error) {
    log("❌ Фатальная ошибка при запуске:", error.message);
    process.exit(1);
  }
}
startServer();
