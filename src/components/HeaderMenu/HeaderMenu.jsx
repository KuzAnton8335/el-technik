import './HeaderMenu.scss';
export const HeaderMenu = () => {
	return (
		<nav className="menu">
			<ul className="menu__list">
				<li className="menu__list-item">
					<a href="#" className="menu__list-link">
						Главная
					</a>
				</li>
				<li className="menu__list-item">
					<a href="#" className="menu__list-link">
						Каталог
					</a>
				</li>
				<li className="menu__list-item">
					<a href="#" className="menu__list-link">
						О Нас
					</a>
				</li>
				<li className="menu__list-item">
					<a href="#" className="menu__list-link">
						Контакты
					</a>
				</li>
				<li className="menu__list-item">
					<a href="#" className="menu__list-link">
						Корзина
					</a>
				</li>
				<li className="menu__list-item">
					<a href="#" className="menu__list-link">
						Админ панель
					</a>
				</li>
			</ul>
		</nav>
	);
};
