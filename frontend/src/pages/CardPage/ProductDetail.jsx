import './CardPage.scss';

export const ProductDetails = ({ product }) => {
	const isCable =
		product.category === 'cable' ||
		product.type === 'cable' ||
		(product.title && product.title.toLowerCase().includes('кабель'));

	return (
		<div className="cardPage__content-info">
			<h3 className="cardPage__subtitle">{product.title}</h3>
			<p className="cardPage__quantity">
				Количество: {product.quantity} {isCable ? 'м' : 'шт'}
			</p>
			<p className="cardPage__description">{product.description}</p>
			<p className="cardPage__price">Стоимость: {product.price} ₽</p>
		</div>
	);
};
