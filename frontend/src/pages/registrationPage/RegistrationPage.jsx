import "./registrationPage.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import { ButtonExit } from '../../components/ButtonExit/ButtonExit.jsx';
import { InputLogin } from '../../components/InputLogin/InputLogin.jsx';
import { InputPassword } from '../../components/InputPassword/InputPassword.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

// схема регистрации пользователя при помощи yup
const regFormShema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните поле логина')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Неверный логин. Минимум 3 символа')
		.max(15, 'Неверный логин. Максимум 15 символов'),

	password: yup
		.string()
		.required('Заполните поле пароля')
		.matches(
			/^[\w#%]+$/,
			'Неверный пароль. Допускаются только буквы, цифры, и знаки # %',
		)
		.min(6, 'Неверно заполнено поле пароля, пароль должен быть не менее 6 символов')
		.max(30, 'Неверно заполнено поле пароля, максимум 30 символов'),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegistrationPage = () => {
	const [serverError, setServerError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [registrationSuccess, setRegistrationSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(regFormShema),
		mode: 'onChange',
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		setServerError(null);

		try {
			const response = await axios.post('http://localhost:3001/elmag/user', {
				userName: data.login,
				password: data.password
			});

			console.log('Успешная регистрация:', response.data);
			setRegistrationSuccess(true);
			reset(); // Очищаем форму после успешной регистрации
		} catch (error) {
			console.error('Ошибка регистрации:', error);
			if (error.response) {
				// Ошибка от сервера
				setServerError(error.response.data.message || 'Ошибка регистрации');
			} else {
				setServerError('Не удалось подключиться к серверу');
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="registrationPage">
			<Header />
			<div className="container">
				<div className="registrationPage__wrapper">
					<div className="registrationPage__exit">
						<ButtonExit className="registrationPage__exitButton" />
					</div>
					<div className="registrationPage__login">
						<h2 className="registrationPage__title">Зарегистрироваться</h2>
						{serverError && <div className="registrationPage__serverError">{serverError}</div>}
						<form className="registrationPage__form" onSubmit={handleSubmit(onSubmit)}>
							<label className="registrationPage__label">Введите логин</label>
							<InputLogin
								placeholder="Логин"
								{...register('login')}
								error={errors.login?.message}
							/>

							<label className="registrationPage__label">Введите пароль</label>
							<InputPassword
								placeholder="Пароль"
								{...register('password')}
								error={errors.password?.message}
							/>

							<label className="registrationPage__label">Повторите пароль</label>
							<InputPassword
								placeholder="Повторите пароль"
								{...register('passcheck')}
								error={errors.passcheck?.message}
							/>

							<button type="submit" className="registrationPage__Enter">
								Регистрация
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default RegistrationPage;
