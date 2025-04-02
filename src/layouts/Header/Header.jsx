import { ButtonEnter } from '../../components/ButtonEnter/ButtonEnter';
import { ButtonReg } from '../../components/ButtonReg/ButtonReg';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';
import './Header.scss';

export const Header = () => {
	const srcIcon = ['./src/assets/Icons/logo.svg'];
	return (
		<header className="header">
			<div className="container header__container">
				<a href="#" className="header__logo-link">
					<img
						src={srcIcon}
						alt="El.Technic icon logo"
						className="header__logo-link-icon"
					/>
					<span className="header__logo-link-text">El.Technic</span>
				</a>

				<HeaderMenu />
				<div className="header__buttons">
					<ButtonEnter name="Войти" />
					<ButtonReg name="Регистрация" />
				</div>
			</div>
		</header>
	);
};
