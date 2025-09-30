import { FooterMenu } from '../../components/FooterMenu/FooterMenu';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import './Footer.scss';

export const Footer = () => {
	const vkIcon = ['../src/assets/Icons/vk.svg'];
	const telegramIcon = ['../src/assets/Icons/telegram.svg'];

	return <footer className="footer">
		<div className="container">
			<div className="footer__menu">
				<HeaderLogo />
				<FooterMenu />
			</div>
			<div className="footer__copy">
				<p className="footer__copyright">
					&copy; 2025 ElTechnic. Все права защищены.
				</p>
				<div className="footer-social__menu">
					<a href="https://vk.com/feed" className="footer__link">
						<img src={vkIcon} alt="Наша страница В Контакте" />
					</a>
					<a href="https://web.tlgrm.ru/" className="footer__link">
						<img src={telegramIcon} alt="Наша страница В Телеграмме" />
					</a>
				</div>
			</div>
		</div>
	</footer>;
};
