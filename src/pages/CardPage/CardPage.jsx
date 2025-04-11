import { ButtonEnter } from '../../components/ButtonEnter/ButtonEnter';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import './CardPage.scss';

const CardPage = () => {
	return (
		<div className="cardPage">
			<Header />
			<div className="cardPage__wrapper">
				<div className="container cardPage__container">
					<SearchCategories />
					<section className="cardPage__content">
						<h2 className="cardPage__title">Описание товара</h2>
						<div className="cardPage__content-card">
							<div className="cardPage__content-images">
								<img
									src="/src/assets/images/card-img-1.jpg"
									alt="product"
									className="cardPage__content-image"
									width={328}
									height={243}
								/>
							</div>
							<div className="cardPage__content-info">
								<h3 className="cardPage__subtitle">
									Электродвигатель Асинхронный
								</h3>
								<p className="cardPage__quantity">Количество: 12шт</p>
								<p className="cardPage__description">
									Электродвигатель трехфазный АИР 90L4 380В 2,2кВт
									1500&nbsp;об/мин 2081&nbsp;DRIVE
									DRV090-L4-002-2-1520&nbsp;ONI
								</p>
								<p className="cardPage__price">Стоимость: 7000 ₽</p>
							</div>
							<div className="cardPage__buttons">
								<ButtonEnter name="Купить" />
							</div>
						</div>
						<p className="cardPage__id"> id Товара</p>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CardPage;
