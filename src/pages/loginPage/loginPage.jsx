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
import {useState} from 'react'
import {NavLink} from 'react-router-dom';

// схема валидации с помощью yup
const loginSchema = yup.object().shape({
	login: yup.string()
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
		.min(6, 'Неверно заполнено  поля пароля, пароль должен быть не менее 6 символов')
		.max(30, 'Неверно заполнено  поля пароля,  Максимум 30 символов'),
})

const LoginPage = () => {
const [serverError, setServerError] = useState(null)
	const dispatch = useDispatch();

const {
	register,
	handleSubmit,
	formState: { errors },
	reset,
} = useForm({
	resolver: yupResolver(loginSchema),
	mode:'onChange'
})

	const onSubmit = (data) => {
		console.log('Форма отправлена:', data);
		// Здесь можно добавить логику отправки данных на сервер
		// dispatch(someAuthAction(data))
		//   .unwrap()
		//   .catch(err => setServerError(err.message));
		reset();
	};

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
						<form className="loginPage__form" onSubmit={handleSubmit(onSubmit)}>
							<label className="loginPage__label">Введите логин</label>
							<InputLogin placeholder="Логин" {...register('login', {
								onChange: () => setServerError(null),
							})}/>
							{errors.login && <span className="loginPage__error">{errors.login.message}</span>}
							<label className="loginPage__label">Введите пароль</label>
							<InputPassword placeholder="Пароль" {...register('password', {
								onChange: () => setServerError(null),
							})}/>
							{errors.password && <span className="loginPage__error">{errors.password.message}</span>}

							{serverError && <span className="loginPage__error">{serverError}</span>}
							<button className="loginPage__Enter">Войти</button>
						</form>
						<div className="loginPage__links">
							<NavLink  className="loginPage__link" to="/registration">Зарегистрироваться</NavLink>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>

	)
}
export default LoginPage;
