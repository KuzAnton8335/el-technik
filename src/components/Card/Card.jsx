import { ButtonEnter } from '../ButtonEnter/ButtonEnter';
import './Card.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction  } from '../../actions/actionProducts';
import { Loader } from "../Loader/Loader";

export const Card = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products?.products ?? []);
	const loading = useSelector(state => state.products?.loading)
	const error = useSelector(state => state.products?.error)

	useEffect(() => {
		dispatch(fetchProductsAction  ());
	}, [dispatch]);

	// функция получения 4 случайных продуктов
	const getRandomProducts = (items, count) => {
		// создаем копию исходного массива
		const shuffled = [...items].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	}

	if (loading) {
		return <Loader/>;
	}
	if (error) {
		console.error(error);
		return <div>Error: {error?.message || 'Неизвестная ошибка'}</div>;
	}

	// получаем 4 случайных продукта
	const randomProducts = products.length > 4
	? getRandomProducts(products, 4) : products;

	return (
		<div className="card-list">
			{Array.isArray(randomProducts) && randomProducts.length > 0 ? (
				randomProducts.map(card => (
					<article className="card" key={card.id}>
						<div className="card__content">
							<div className="card__images">
								<img
									src={card.image}
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
								<ButtonEnter name="Открыть карточку" productId={card.id}/>
							</div>
						</div>
					</article>
				))
			) : (
				<div>Нет доступных продуктов</div>
			)}
		</div>
	);
}

