import { NavLink } from 'react-router-dom';
import './HeaderMenu.scss';
export const HeaderMenu = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<li className="menu__list-item">
					<NavLink to="/" className="menu__list-link menu__list-link-active">
						Главная
					</NavLink>
				</li>
				<li className="menu__list-item">
					<NavLink
						to="/catalog"
						className="menu__list-link menu__list-link-active"
					>
						Каталог
					</NavLink>
				</li>
				<li className="menu__list-item">
					<NavLink
						to="/contacts"
						className="menu__list-link menu__list-link-active"
					>
						Контакты
					</NavLink>
				</li>
				<li className="menu__list-item">
					<NavLink
						to="/cart"
						className="menu__list-link menu__list-link-active"
					>
						Корзина
					</NavLink>
				</li>
				<li className="menu__list-item">
					<NavLink
						to="/admin"
						className="menu__list-link menu__list-link-active"
					>
						Админ панель
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
