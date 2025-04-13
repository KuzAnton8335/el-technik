import "./loginPage.scss";
import { Header } from '../../layouts/Header/Header.jsx';
import {ButtonExit } from '../../components/ButtonExit/ButtonExit.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import {InputLogin} from '../../components/InputLogin/InputLogin.jsx';
import { InputPassword } from '../../components/InputPassword/InputPassword.jsx';


const LoginPage = () => {
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
							<InputLogin placeholder="Логин"/>
							<label className="loginPage__label">Введите пароль</label>
							<InputPassword placeholder="Пароль"/>
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
