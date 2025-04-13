import "./registrationPage.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import { ButtonExit } from '../../components/ButtonExit/ButtonExit.jsx';
import { InputLogin } from '../../components/InputLogin/InputLogin.jsx';
import { InputPassword } from '../../components/InputPassword/InputPassword.jsx';

const RegistrationPage = () => {
	return (
		<div className="registrationPage">
			<Header/>
			<div className="container">
				<div className="registrationPage__wrapper">
					<div className="registrationPage__exit">
						<ButtonExit className="registrationPage__exitButton" />
					</div>
					<div className="registrationPage__login">
						<h2 className="registrationPage__title">Зарегистрироваться</h2>
						<form className="registrationPage__form">
							<label className="registrationPage__label">Введите логин</label>
							<InputLogin placeholder="Логин" />
							<label className="registrationPage__label">Введите пароль</label>
							<InputPassword placeholder="Пароль" />
							<button className="registrationPage__Enter">Регистрация</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default RegistrationPage;
