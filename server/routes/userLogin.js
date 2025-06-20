const express = require("express");
const router = express.Router();
const UserReg = require("../models/UserReg"); // путь к вашей модели
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // если хотите использовать JWT

// Маршрут для входа пользователя
router.post("/userregs", async (req, res) => {
  try {
    const { userName, password } = req.body;
    // Проверяем, что предоставлены имя пользователя и пароль
    if (!userName || !password) {
      return res
        .status(400)
        .json({ message: "Имя пользователя и пароль обязательны" });
    }
    //Ищем пользователя в базе данных
    const user = await UserReg.findOne({ userName });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Неверное имя пользователя или пароль" });
    }
    // Сравниваем предоставленный пароль с хешем в базе данных
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Неверное имя пользователя или пароль" });
    }
    // Если аутентификация успешна, можно создать JWT токен
    const token = jwt.sign(
      { userId: user._id, userName: user.userName },
      process.env.JWT_SECRET, // секретный ключ из переменных окружения
      { expiresIn: "1h" }
    );

    // Отправляем ответ с токеном (или без него, если не используете JWT)
    res.json({
      message: "Вход выполнен успешно",
      token,
      userId: user._id,
      userName: user.userName,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера при попытке входа" });
  }
});

// --- НОВЫЙ МИДЛВАР ДЛЯ ПРОВЕРКИ JWT ТОКЕНА ---
const verifyToken = (req, res, next) => {
  // Получаем токен из заголовка Authorization
  // Ожидаем формат: "Bearer <token>"
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Доступ запрещен. Токен не предоставлен." });
  }

  const token = authHeader.split(" ")[1]; // Извлекаем сам токен после "Bearer "

  if (!token) {
    return res
      .status(401)
      .json({ message: "Доступ запрещен. Неверный формат токена." });
  }

  try {
    // Верифицируем токен
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Добавляем информацию о пользователе из токена в объект запроса
    req.user = decoded;
    next(); // Переходим к следующему мидлвару или обработчику маршрута
  } catch (error) {
    // Если токен недействителен (истек, подделан и т.д.)
    res.status(400).json({ message: "Неверный или просроченный токен." });
  }
};

// --- НОВЫЙ GET МАРШРУТ ДЛЯ ПОЛУЧЕНИЯ ИНФОРМАЦИИ О ТЕКУЩЕМ ПОЛЬЗОВАТЕЛЕ ---
// Этот маршрут будет доступен только аутентифицированным пользователям
router.get("/userregs", verifyToken, async (req, res) => {
  try {
    // req.user.userId был добавлен мидлваром verifyToken
    // Ищем пользователя по ID, исключая поле 'password' для безопасности
    const user = await UserReg.findById(req.user.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден." });
    }

    // Отправляем информацию о пользователе
    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ошибка сервера при получении данных пользователя." });
  }
});

// --- Опционально: GET маршрут для получения пользователя по ID (например, для администраторов) ---
// Этот маршрут также должен быть защищен, возможно, с дополнительной проверкой роли пользователя
router.get("/userregs/:id", verifyToken, async (req, res) => {
  try {
    // В реальном приложении здесь должна быть проверка,
    // имеет ли текущий пользователь (req.user) право запрашивать данные другого пользователя.
    // Например: if (req.user.role !== 'admin' && req.user.userId !== req.params.id) { ... }

    const user = await UserReg.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден." });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Ошибка сервера при получении данных пользователя." });
  }
});

module.exports = router;
