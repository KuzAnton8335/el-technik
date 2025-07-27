// src/pages/LoginPage/LoginForm.jsx
import { InputLogin } from '../../components/InputLogin/InputLogin.jsx';
import { InputPassword } from '../../components/InputPassword/InputPassword.jsx';
import { NavLink } from 'react-router-dom';

export const LoginForm = ({
							  register,
							  handleSubmit,
							  errors,
							  serverError,
							  isLoading,
							  onSubmit,
							  setServerError
						  }) => {
	return (
		<form className="loginPage__form" onSubmit={handleSubmit(onSubmit)}>
			<label className="loginPage__label">Введите логин</label>
			<InputLogin
				placeholder="Логин"
				{...register('userName', {
					onChange: () =>setServerError && setServerError(null),
				})}
			/>
			{errors.userName && <span className="loginPage__error">{errors.userName.message}</span>}

			<label className="loginPage__label">Введите пароль</label>
			<InputPassword
				placeholder="Пароль"
				{...register('password', {
					onChange: () => setServerError && setServerError(null),
				})}
			/>
			{errors.password && <span className="loginPage__error">{errors.password.message}</span>}

			{serverError && <span className="loginPage__error">{serverError}</span>}

			<button
				className="loginPage__Enter"
				type="submit"
				disabled={isLoading}
			>
				{isLoading ? 'Загрузка...' : 'Войти'}
			</button>

			<div className="loginPage__links">
				<NavLink className="loginPage__link" to="/registration">
					Зарегистрироваться
				</NavLink>
			</div>
		</form>
	);
};
