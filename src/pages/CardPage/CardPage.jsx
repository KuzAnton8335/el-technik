import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductByIdAction } from '../../actions/actionProducts';
import { ButtonEnter } from '../../components/ButtonEnter/ButtonEnter';
import { Loader } from '../../components/Loader/Loader';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import './CardPage.scss';

const CardPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	// Получаем товар из Redux store (из поля `currentProduct`)
	const { currentProduct, loading, error } = useSelector((state) => state.card);

	useEffect(() => {
		dispatch(fetchProductByIdAction(id));
	}, [dispatch, id]);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <div>Ошибка: {error.message || 'Неизвестная ошибка'}</div>;
	}

	if (!currentProduct) {
		return <div>Товар не найден</div>;
	}

	return (
		<div className="cardPage">
			<Header />
			<div className="cardPage__wrapper">
				<div className="container cardPage__container">
					<SearchCategories />
					<section className="cardPage__content">
						<h2 className="cardPage__title">{currentProduct.title}</h2>
						<div className="cardPage__content-card">
							<div className="cardPage__content-images">
								<img
									src={currentProduct.image}
									alt={currentProduct.title}
									className="cardPage__content-image"
									width={328}
									height={243}
								/>
							</div>
							<div className="cardPage__content-info">
								<h3 className="cardPage__subtitle">
									{currentProduct.subtitle}
								</h3>
								<p className="cardPage__quantity">
									{currentProduct.quantity}
								</p>
								<p className="cardPage__description">
									{currentProduct.description}
								</p>
								<p className="cardPage__price">
									{currentProduct.price} ₽
								</p>
							</div>
							<div className="cardPage__buttons">
								<ButtonEnter name="Купить" />
							</div>
						</div>
						<p className="cardPage__id">ID товара: {currentProduct.id}</p>
					</section>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CardPage;
