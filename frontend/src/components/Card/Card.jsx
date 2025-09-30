import { ButtonEnter } from '../ButtonEnter/ButtonEnter';
import './Card.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../../actions/actionProducts';
import { Loader } from "../Loader/Loader";

export const Card = ({ selectedCategory, searchQuery, priceFilter }) => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products?.products ?? []);
	const loading = useSelector(state => state.products?.loading);
	const error = useSelector(state => state.products?.error);

	useEffect(() => {
		dispatch(fetchProductsAction());
	}, [dispatch]);

	const getRandomProducts = (items, count) => {
		const shuffled = [...items].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	}

	const getFilteredProducts = (items, selectedCategory, searchQuery = '', priceFilter = '') => {
		let filtered = [...items];

		// Фильтрация по категории
		if (selectedCategory) {
			filtered = filtered.filter(product => product.category === selectedCategory);
		}

		// Фильтрация по поисковому запросу
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			filtered = filtered.filter(product =>
				product.title.toLowerCase().includes(query) ||
				(product.id && product.id.toString().includes(query))
			);
		}

		// Фильтрация по цене (должна работать!)
		if (priceFilter) {
			const priceValue = Number(priceFilter); // Преобразуем в число
			filtered = filtered.filter(product => product.price <= priceValue);
		}

		return filtered;
	};

	if (loading) {
		return <Loader/>;
	}
	if (error) {
		console.error(error);
		return <div>Error: {error?.message || 'Неизвестная ошибка'}</div>;
	}

	const filteredProducts = getFilteredProducts(products, selectedCategory, searchQuery, priceFilter);
	const displayedProducts = filteredProducts.length > 4
		? getRandomProducts(filteredProducts, 4)
		: filteredProducts;

	return (
		<div className="card-list">
			{displayedProducts.length > 0 ? (
				displayedProducts.map(card => (
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
				<div>Нет доступных продуктов по выбранным критериям</div>
			)}
		</div>
	);
}
