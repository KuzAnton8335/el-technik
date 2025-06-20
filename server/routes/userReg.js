const express = require("express");
const router = express.Router();
const UserReg = require("../models/UserReg");
const bcrypt = require("bcryptjs");

router.post("/user", async (req, res) => {
  try {
    const { userName, password } = req.body;
    // Проверяем, существует ли уже пользователь с таким именем
    const existingUser = await UserReg.findOne({ userName });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Пользователь с таким именем уже существует" });
    }
    // Хэшируем пароль
    const hashedPassword = await bcrypt.hash(password, 12);

    //Создаем нового пользователя
    const newUser = new UserReg({
      userName,
      password: hashedPassword,
    });

    // Сохраняем пользователя в базу данных
    await newUser.save();

    res
      .status(201)
      .json({ message: "Пользователь успешно зарегистрирован", user: newUser });
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
  }
});

module.exports = router;
