import { ButtonEnter } from '../ButtonEnter/ButtonEnter';
import './Card.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../../actions/actionProducts';
import { Loader } from "../Loader/Loader";

export const Card = () => {
	const dispatch = useDispatch();
	const { loading, products = [], error } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(fetchProductsAction());
	}, [dispatch]);

	if (loading) {
		return <Loader />;
	}
	if (error) {
		return <div>Error: {error?.message || 'Неизвестная ошибка'}</div>;
	}

	return (
		<div className="card-list">
			{Array.isArray(products) && products.map((card) => (
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
							<ButtonEnter name="Открыть карточку" />
						</div>
					</div>
				</article>
			))}
		</div>
	);
};

