import "./loginPage.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import {ButtonExit } from '../../components/ButtonExit/ButtonExit.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import {InputLogin} from '../../components/InputLogin/InputLogin.jsx';
import { InputPassword } from '../../components/InputPassword/InputPassword.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// схема валидации формы ввода данных для формы входа при помощи библиотеки yup
const loginSchema = yup.object().shape({
	login: yup
	.string()
	.required("Заполните поле ввода логина")
	.matches (/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Неверный логин. Минимум 3 символа')
		.max(15, 'Неверный логин. Максимум 15 символов'),
	password: yup
		.string()
		.required("Заполните поле ввода пароля")
		.matches(
			/^[\w#%]+$/,
			'Неверный пароль. Допускаются только буквы, цифры, и знаки # %',
		)
		.min(6, 'Неверно заполнено  поля пароля, пароль должен быть не менее 6 символов')
		.max(30, 'Неверно заполнено  поля пароля,  Максимум 30 символов'),
})


const LoginPage = () => {
	// функция dispatch
	const dispatch = useDispatch();
	// переменные для работы формы авторизации
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	//  переменная для вывода ошибок сервера
	const [serverError, setServerError] = useState(null);
	// обработка ошибки сервера на форме авторизации
	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса:${error}`);
				return;
			}
			dispatch(setUser(res));
		});
	};
	// ошибки формы авторизации
	const formError = errors?.login?.message || errors?.password?.message;
	// ошибки сервера при авторизации
	const errorMessage = formError || serverError;

	return (
		<div className="loginPage">
			<Header />
			<div className="container">
				<div className="loginPage__wrapper">
					<div className="loginPage__exit">
						<ButtonExit className="loginPage__exitButton" />
					</div>
					<div className="loginPage__login">
						<h2 className="loginPage__title">Вход</h2>
						<form className="loginPage__form">
							<label className="loginPage__label">Введите логин</label>
							<InputLogin placeholder="Логин" value={'login'} {...register('login', {
								onChange: () => setServerError(null),
							})}/>
							{errors.login && <span className="loginPage__error">{errors.login.message}</span>}
							<label className="loginPage__label">Введите пароль</label>
							<InputPassword placeholder="Пароль" value={ 'password'} {...register('password', {
								onChange: () => setServerError(null),
							})}/>
							{errors.password && <span className="loginPage__error">{errors.password.message}</span>}
							<button className="loginPage__Enter">Войти</button>
						</form>
						<div className="loginPage__links">
							<a href="#" className="loginPage__link">Зарегистрироваться</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>

	)
}
export default LoginPage;
