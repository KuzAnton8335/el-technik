import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCartAction } from '../../actions/actionCart';
import { fetchProductByIdAction } from '../../actions/actionProducts';
import { ButtonModal } from '../../components/ButtonModal/ButtonModal';
import { Loader } from '../../components/Loader/Loader';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import './CardPage.scss';
import { ProductDetails } from './ProductDetail';
import { ProductImages } from './ProductImages';
import { QuantityModal } from './QuantityModal';

const CardPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { currentProduct, loading, error } = useSelector((state) => state.card);

	useEffect(() => {
		dispatch(fetchProductByIdAction(id));
	}, [dispatch, id]);

	const handleBuyClick = () => setIsModalOpen(true);
	const handleCancel = () => setIsModalOpen(false);
	// В компоненте CardPage добавьте обработчик для добавления в корзину
	const handleAddToCart = () => {
		dispatch(addToCartAction(currentProduct, quantity));
		setIsModalOpen(false); // Закрываем модальное окно после добавления
	};

	// Ошибки обработки при загрузке данных
	if (loading) return <Loader className="loader" />;
	if (error) return <div>Ошибка: {error.message || 'Неизвестная ошибка'}</div>;
	if (!currentProduct) return <div>Товар не найден</div>;

	return (
		<div className="cardPage">
			<Header />
			<div className="cardPage__wrapper">
				<div className="container cardPage__container">
					<SearchCategories />
					<section className="cardPage__content">
						<h2 className="cardPage__title">{currentProduct.title}</h2>
						<div className="cardPage__content-card">
							<ProductImages product={currentProduct} />
							<ProductDetails product={currentProduct} />
							<div className="cardPage__buttons">
								<ButtonModal name="Купить" onClick={handleBuyClick} />
							</div>
						</div>
						<p className="cardPage__id">ID товара: {currentProduct.id}</p>
					</section>
				</div>
			</div>
			<Footer />
			<QuantityModal
				isOpen={isModalOpen}
				onClose={handleCancel}
				product={currentProduct}
				quantity={quantity}
				setQuantity={setQuantity}
				onAddToCart={handleAddToCart}
			/>
		</div>
	);
};

export default CardPage;
