const express = require('express');
const router = express.Router();
const UserReg = require('../models/UserReg'); // путь к вашей модели
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* Доделать маршрут для админ страницы  что бы открывалась админ страница */
