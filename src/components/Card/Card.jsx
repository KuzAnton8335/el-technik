import { ButtonEnter } from '../ButtonEnter/ButtonEnter';
import './Card.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAction } from '../../actions/actionProducts';
import { Loader } from "../Loader/Loader";

export const Card = ({ selectedCategory }) => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.products?.products ?? []);
	const loading = useSelector(state => state.products?.loading);
	const error = useSelector(state => state.products?.error);

	useEffect(() => {
		dispatch(fetchProductsAction());
	}, [dispatch]);


	// Функция для получения категории конкретного продукта по ID
	const getProductCategory = (items, productId) => {
		console.log('Getting category for product:', productId);
		const product = items.find(item => item.id === productId);
		if (!product) {
			console.log('Product not found');
			return null;
		}
		console.log('Found category:', product.category);
		return product.category;
	};

	// Функция для получения всех уникальных категорий из продуктов
	const getCategoriesFromProducts = (items) => {
		console.log('Extracting categories from:', items);
		if (!items || items.length === 0) return [];

		// Получаем все уникальные категории
		const categories = [...new Set(items.map(product => product.category))];
		console.log('Extracted categories:', categories);
		return categories;
	};

	// Функция фильтрации продуктов по категории
	const getFilteredProducts = (items, selectedCategory) => {
		// Сначала получаем все категории (опционально, если нужна проверка)
		const availableCategories = getCategoriesFromProducts(items);
		// Если категория не выбрана или её нет в списке, возвращаем все товары
		if (!selectedCategory || !availableCategories.includes(selectedCategory)) {
			return items;
		}
		// Фильтруем по выбранной категории
		return items.filter(product => product.category === selectedCategory);
	};


	// Функция получения 4 случайных продуктов
	const getRandomProducts = (items, count) => {
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

	// Фильтруем продукты по выбранной категории
	const filteredProducts = getFilteredProducts(products, selectedCategory);

	// Получаем 4 случайных продукта (или все, если их меньше 4)
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
				<div>Нет доступных продуктов в выбранной категории</div>
			)}
		</div>
	);
}
