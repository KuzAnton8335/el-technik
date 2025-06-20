// src/pages/LoginPage/validationSchema.js
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	userName: yup.string()
		.required('Введите логин')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Неверный логин. Минимум 3 символа')
		.max(15, 'Неверный логин. Максимум 15 символов'),
	password: yup.string()
		.required('Введите пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверный пароль. Допускаются только буквы, цифры, и знаки # %',
		)
		.min(6, 'Неверно заполнено поле пароля, пароль должен быть не менее 6 символов')
		.max(30, 'Неверно заполнено поле пароля, максимум 30 символов'),
});
