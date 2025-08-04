const jwt = require('jsonwebtoken');
const UserAdmin = require('../models/UserAdmin');
const bcrypt = require('bcryptjs');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Авторизация администратора
// @route   POST /api/v1/admin/auth
// @access  Public
exports.login = async (req, res, next) => {
	const { useradmin, password } = req.body;

	try {
		// Проверяем, что имя администратора - elmagadmin
		if (useradmin !== 'elmagadmin') {
			return res.status(401).json({
				success: false,
				error: 'Неверные учетные данные',
			});
		}

		// Находим администратора в базе данных
		const admin = await UserAdmin.findOne({ useradmin }).select('+password');

		if (!admin) {
			return res.status(401).json({
				success: false,
				error: 'Неверные учетные данные',
			});
		}

		// Проверяем пароль (в данном случае жестко заданный пароль)
		if (password !== '103rt103') {
			return res.status(401).json({
				success: false,
				error: 'Неверные учетные данные',
			});
		}

		// Создаем JWT токен
		const token = jwt.sign(
			{ id: admin._id, role: admin.role },
			process.env.JWT_ADMIN,
			{
				expiresIn: process.env.JWT_EXPIRE,
			},
		);

		res.status(200).json({
			success: true,
			token,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Ошибка сервера',
		});
	}
};

// @desc    Получить текущего администратора
// @route   GET /api/v1/admin/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
	try {
		const admin = await UserAdmin.findById(req.admin.id);

		res.status(200).json({
			success: true,
			data: admin,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: 'Ошибка сервера',
		});
	}
};
