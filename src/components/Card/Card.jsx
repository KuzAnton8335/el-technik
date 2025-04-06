import { ButtonEnter } from '../ButtonEnter/ButtonEnter';
import './Card.scss';

const cardData = [
	{
		id: 1,
		title: 'Электродвигатель Асинхронный 1.5 кВт',
		price: 7000,
		imgSrc: '/src/assets/images/card-img-1.jpg',
	},
	{
		id: 2,
		title: 'Автоматический выключатель',
		price: 3500,
		imgSrc: '/src/assets/images/card-img-2.jpg',
	},
	{
		id: 3,
		title: 'Провод ВВГнг  3x2.5 mm',
		price: 5690,
		imgSrc: '/src/assets/images/card-img-3.jpg',
	},
];

export const Card = () => {
	return (
		<div className="card-list">
			{cardData.map((card) => (
				<article className="card" key={card.id}>
					<div className="card__content">
						<div className="card__images">
							<img
								src={card.imgSrc}
								alt={`фото ${card.title}`}
								className="card__images-img"
							/>
						</div>
						<div className="card__info">
							<h3 className="card__info-title">{card.title}</h3>
							<p className="card__info-id">id: {card.id}</p>
							<p className="card__info-price">
								Стоимость: {card.price} руб
							</p>
						</div>
						<div className="card__buttons">
							<ButtonEnter name="Открыть карточку" />
						</div>
					</div>
				</article>
			))}
		</div>
	);
};
