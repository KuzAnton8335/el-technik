import { ButtonEnter } from '../../components/ButtonEnter/ButtonEnter';
import { ButtonReg } from '../../components/ButtonReg/ButtonReg';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';
import './Header.scss';

export const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<HeaderLogo />
				<HeaderMenu />
				<div className="header__buttons">
					<ButtonEnter name="Войти" />
					<ButtonReg name="Регистрация" />
				</div>
			</div>
		</header>
	);
};
