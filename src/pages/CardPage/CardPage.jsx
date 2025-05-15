import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductByIdAction } from '../../actions/actionProducts';
import {ButtonModal} from '../../components/ButtonModal/ButtonModal';
import {ButtonEnter} from '../../components/ButtonEnter/ButtonEnter.jsx';
import { Loader } from '../../components/Loader/Loader';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { Footer } from '../../layouts/Footer/Footer';
import { Header } from '../../layouts/Header/Header';
import {Modal} from "../../components/Modal/Modal";
import './CardPage.scss';

const CardPage = () => {
	// Получаем параметр ID товара из URL
	const { id } = useParams();
	// Получаем функцию dispatch из Redux store
	const dispatch = useDispatch();
	// количество товара для передачи в компоненты
	const [quantity, setQuantity] = useState(1);
	// состояние модального окна
	const [isModalOpen, setIsModalOpen] = useState(false);


	// Получаем товар из Redux store (из поля `currentProduct`)
	const { currentProduct, loading, error } = useSelector((state) => state.card);

	useEffect(() => {
		dispatch(fetchProductByIdAction(id));
	}, [dispatch, id]);
	// функция открытия модального окна
	const handleBuyClick = () =>{
		setIsModalOpen (true);
	}

	const handleConfirm = () => {
		// Здесь можно добавить логику для обработки покупки
		console.log(`Покупка ${quantity} ${isCable ? 'м' : 'шт'} товара`);
		setIsModalOpen(false);
		// Можно добавить dispatch для добавления товара в корзину
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

    // Загрузчик во время получения товара из API
	if (loading) {
		return <Loader className="loader" />;
	}

	if (error) {
		return <div>Ошибка: {error.message || 'Неизвестная ошибка'}</div>;
	}

	if (!currentProduct) {
		return <div>Товар не найден</div>;
	}
	// Определяем,является ли товар кабелем
	const isCable = currentProduct.category === 'cable' ||
		                    currentProduct.type === 'cable' ||
		(currentProduct.title && currentProduct.title.toLowerCase().includes('кабель'));
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
									{currentProduct.title}
								</h3>
								<p className="cardPage__quantity">
									Количество: {currentProduct.quantity} {isCable ? 'м' : 'шт'}
								</p>
								<p className="cardPage__description">
									{currentProduct.description}
								</p>
								<p className="cardPage__price">
									Стоимость: {currentProduct.price} ₽
								</p>
							</div>
							<div className="cardPage__buttons">
								<ButtonModal name="Купить" onClick={handleBuyClick}/>
							</div>
						</div>
						<p className="cardPage__id">ID товара: {currentProduct.id}</p>
					</section>
				</div>
			</div>
			<Footer />

			// Модальное окно
			<Modal isOpen={isModalOpen} onClose={handleCancel}>
				<div className="quantity__modal">
					<h3>Выберите количество</h3>
					<div className="quantity__controls">
						<button
							onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
							disabled={quantity <= 1}
						>
							-
						</button>
						<span>{quantity} {isCable ? 'м' : 'шт'}</span>
						<button
							onClick={() => setQuantity(prev => prev + 1)}
							disabled={quantity >= currentProduct.quantity}
						>
							+
						</button>
					</div>
					<p>Общая стоимость: {currentProduct.price * quantity} ₽</p>
					<div className="quantity__buttons">
						<ButtonModal name="Отмена" onClick={handleCancel} />
						<ButtonModal name="Подтвердить" onClick={handleConfirm} />
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default CardPage;
