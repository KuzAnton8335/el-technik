import "./notfoundpage.scss";
import { Header } from '../../layouts/Header/Header';
import { Footer } from '../../layouts/Footer/Footer';
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="notfoundpage">
			<Header />
			<div className="container">
				<div className="notfoundpage__wrapper">
					<h1 className="notfoundpage__title">404 - Страница не найдена</h1>
					<p className="notfoundpage__text">К сожалению, страница не найдена.Возможно, она была удалена или перемещена.</p>
					<NavLink to="/" className="notfoundpage__link">Вернуться на главную</NavLink>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default NotFoundPage;

