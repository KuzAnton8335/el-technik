import { ButtonEnter } from '../../components/ButtonEnter/ButtonEnter';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import './CardPage.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAction } from '../../actions/actionProducts';
import { Loader } from '../../components/Loader/Loader';
import { useParams } from 'react-router-dom';

const CardPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(state => state.products?.products ?? []);
	const loading = useSelector(state => state.products.loading);
	const error = useSelector(state => state.products.error);

	useEffect(() => {
		dispatch(fetchProductByIdAction(id));
	}, [dispatch, id]);


	if (loading) {
		return <Loader />;
	}

	if (error) {
		console.error(error);
		return <div>Error: {error?.message || 'Неизвестная ошибка'}</div>;
	}

	if (!product) {
		return <div>Товар не найден</div>;
	}

	return (
		<div className="cardPage">
			<Header />
			<div className="cardPage__wrapper">
				<div className="container cardPage__container">
					<SearchCategories />
						<section key={product.id} className="cardPage__content">
							<h2 className="cardPage__title">{product.title}</h2>
							<div className="cardPage__content-card">
								<div className="cardPage__content-images">
									<img
										src={product.image}
										alt="product"
										className="cardPage__content-image"
										width={328}
										height={243}
									/>
								</div>
								<div className="cardPage__content-info">
									<h3 className="cardPage__subtitle">
										{product.subtitle}
									</h3>
									<p className="cardPage__quantity">
										{product.quantity}
									</p>
									<p className="cardPage__description">
										{product.description}
									</p>
									<p className="cardPage__price">{product.price}</p>
								</div>
								<div className="cardPage__buttons">
									<ButtonEnter name="Купить" />
								</div>
							</div>
							<p className="cardPage__id">id Товара: {product.id}</p>
						</section>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CardPage;
