import { NavLink } from 'react-router-dom';
import './FooterMenu.scss';

export const FooterMenu = () => {
	return (
		<nav className="navigation">
			<NavLink to="/about" className="navigation__link navigation__link-active">
				О нас
			</NavLink>
			<NavLink to="/contacts" className="navigation__link navigation__link-active">
				Контакты
			</NavLink>
			<NavLink to="/politics" className="navigation__link navigation__link-active">
				Политика конфиденциальности
			</NavLink>
		</nav>
	);
};
