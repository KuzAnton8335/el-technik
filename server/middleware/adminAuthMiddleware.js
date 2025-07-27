const jwt = require('jsonwebtoken');
const UserAdmin = require('../models/UserAdmin');
const ErrorResponse = require('../utils/errorResponse');

// Защита маршрутов
exports.protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		return next(new ErrorResponse('Не авторизован, доступ запрещен', 401));
	}

	try {
		// Проверяем токен
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.admin = await UserAdmin.findById(decoded.id);

		if (!req.admin) {
			return next(new ErrorResponse('Пользователь не найден', 404));
		}

		next();
	} catch (err) {
		return next(new ErrorResponse('Не авторизован, доступ запрещен', 401));
	}
};

// Проверка роли
exports.authorize = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.admin.role)) {
			return next(
				new ErrorResponse(`Роль ${req.admin.role} не имеет доступа`, 403),
			);
		}
		next();
	};
};
