const mongoose = require('mongoose');

const UserAdminSchema = new mongoose.Schema({
	useradmin: {
		type: String,
		required: [true, 'Пожалуйста, укажите имя администратора'],
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: [true, 'Пожалуйста, укажите пароль'],
		minlength: 6,
		select: false, // Пароль не будет возвращаться при запросе данных администратора
	},
	role: {
		type: String,
		default: 'admin',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

// Статический метод для инициализации администратора
UserAdminSchema.statics.initAdmin = async function () {
	try {
		const ADMIN_USERNAME = 'elmagadmin';
		const ADMIN_PASSWORD = '103rt103';

		// Проверяем, существует ли уже администратор
		const existingAdmin = await this.findOne({ useradmin: ADMIN_USERNAME });

		if (!existingAdmin) {
			await this.create({
				useradmin: ADMIN_USERNAME,
				password: ADMIN_PASSWORD,
				role: 'admin',
			});
			console.log('✅ Администратор по умолчанию создан');
		} else {
			console.log('ℹ️ Администратор по умолчанию уже существует');
		}
	} catch (err) {
		console.error('❌ Ошибка при создании администратора:', err.message);
	}
};

module.exports = mongoose.model('UserAdmin', UserAdminSchema);
