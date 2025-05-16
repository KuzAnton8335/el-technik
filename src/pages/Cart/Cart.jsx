import { useDispatch, useSelector } from 'react-redux';
import { clearCartAction, removeFromCartAction } from '../../actions/actionCart';
import { SearchCategories } from '../../components/SearchCategories/SearchCategories';
import { Footer } from '../../layouts/Footer/Footer.jsx';
import { Header } from '../../layouts/Header/Header.jsx';
import './Cart.scss';

const Cart = () => {
	// Получаем данные корзины из Redux store
	const { items, total } = useSelector((state) => state.cart);

	const dispatch = useDispatch();
	// Функция для удаления товара из корзины
	const handleRemoveItem = (productId) => {
		dispatch(removeFromCartAction(productId));
	};

	return (
		<div className="cart">
			<Header />
			<div className="container">
				<div className="cart__top">
					<SearchCategories />
				</div>
				<div className="cart__wrapper">
					<div className="cart__content">
						{items.length === 0 ? (
							<p className="cart__empty">Корзина пуста</p>
						) : (
							items.map((item) => (
								<div key={item.product.id} className="cart__content-body">
									<button
										className="cart__content-body-btn"
										onClick={() => handleRemoveItem(item.product.id)}
									>
										<svg
											width="25"
											height="25"
											viewBox="0 0 25 25"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M25 22.6165C25 23.933 23.933 25 22.6165 25H2.3835C1.067 25 0 23.933 0 22.6165V2.3835C0 1.067 1.067 0 2.3835 0H22.6165C23.933 0 25 1.067 25 2.3835V22.6165Z"
												fill="#E9AB74"
											/>
											<path
												opacity="0.2"
												d="M18.5144 7.671L7.6709 18.5145L14.1564 25H22.6164C23.9329 25 24.9999 23.933 24.9999 22.6165V14.1565L18.5144 7.671Z"
												fill="black"
											/>
											<path
												d="M18.5146 16.241C18.8151 16.5415 18.8151 17.029 18.5146 17.3295L17.3291 18.515C17.0286 18.8155 16.5411 18.8155 16.2406 18.515L6.48563 8.759C6.18513 8.4585 6.18513 7.971 6.48563 7.6705L7.67113 6.485C7.97163 6.1845 8.45913 6.1845 8.75963 6.485L18.5146 16.241Z"
												fill="white"
											/>
											<path
												d="M16.2411 6.48551C16.5416 6.18501 17.0291 6.18501 17.3296 6.48551L18.5151 7.67101C18.8156 7.97151 18.8156 8.45901 18.5151 8.75951L8.75914 18.5145C8.45864 18.815 7.97114 18.815 7.67064 18.5145L6.48514 17.329C6.18464 17.0285 6.18464 16.541 6.48514 16.2405L16.2411 6.48551Z"
												fill="white"
											/>
										</svg>
									</button>
									<div className="cart__content-images">
										<img
											src={
												item.product.image ||
												'/src/assets/images/card-img-5.jpg'
											}
											width="225"
											height="243"
											alt={item.product.title}
											className="cart__content-image"
										/>
										<p className="cart__content-id">
											ID товара: {item.product.id}
										</p>
									</div>
									<div className="cart__content-info">
										<h3 className="cart__content-title">
											{item.product.title}
										</h3>
										<p className="cart__content-quantity">
											Количество: {item.quantity} шт.
										</p>
										<p className="cart__content-price">
											Стоимость:{' '}
											{item.product.price * item.quantity} руб.
										</p>
									</div>
								</div>
							))
						)}
					</div>
					<div className="cart__right">
						<div className="cart__total">
							<h4 className="cart__total-title">Итого</h4>
							<div className="cart__total-info">
								<span>Итоговая сумма: {total} руб.</span>
							</div>
							<div className="cart__total-buttons">
								<button
									className="cart__total-btn"
									disabled={items.length === 0}
								>
									Оформить Заказ
								</button>
								<button
									className="cart__total-btn"
									onClick={() => dispatch(clearCartAction())}
									disabled={items.length === 0}
								>
									Очистить корзину
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
