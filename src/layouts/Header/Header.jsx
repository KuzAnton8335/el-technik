import { ButtonEnter } from '../../components/ButtonEnter/ButtonEnter';
import { ButtonReg } from '../../components/ButtonReg/ButtonReg';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<HeaderLogo />
				<HeaderMenu />
				<div className="header__buttons">
					<NavLink to="/login">
						<ButtonEnter name="Войти"  />
					</NavLink>
					<NavLink to="/registration">
						<ButtonReg name="Регистрация" />
					</NavLink>
				</div>
			</div>
		</header>
	);
};
