import './FooterMenu.scss';

export const FooterMenu = () => {
	return (
		<nav className="navigation">
			<a href="/about" className="navigation__link">
				О нас
			</a>
			<a href="/contact" className="navigation__link">
				Контакты
			</a>
			<a href="/privacy" className="navigation__link">
				Политика конфиденциальности
			</a>
		</nav>
	);
};
