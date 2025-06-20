// src/pages/LoginPage/LoginPage.jsx
import "./loginPage.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import { ButtonExit } from '../../components/ButtonExit/ButtonExit.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from './validationShema.js';
import { loginUser } from './api';
import { LoginForm } from './LoginForm';

const LoginPage = () => {
	const [serverError, setServerError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
		mode: 'onChange'
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		setServerError(null);

		try {
			await loginUser(data);
			navigate('/');
		} catch (error) {
			if (error.response) {
				setServerError(error.response.data.message || 'Ошибка при входе');
			} else if (error.request) {
				setServerError('Сервер не отвечает');
			} else {
				setServerError('Ошибка при отправке запроса');
			}
		} finally {
			setIsLoading(false);
		}
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
						<LoginForm
							register={register}
							handleSubmit={handleSubmit}
							errors={errors}
							serverError={serverError}
							isLoading={isLoading}
							onSubmit={onSubmit}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LoginPage;
