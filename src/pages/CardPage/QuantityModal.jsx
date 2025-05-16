import { ButtonModal } from '../../components/ButtonModal/ButtonModal';
import { Modal } from '../../components/Modal/Modal';
import './QuantityModal.scss';

export const QuantityModal = ({ isOpen, onClose, product, quantity, setQuantity }) => {
	const isCable =
		product.category === 'cable' ||
		product.type === 'cable' ||
		(product.title && product.title.toLowerCase().includes('кабель'));

	const handleConfirm = () => {
		console.log(`Покупка ${quantity} ${isCable ? 'м' : 'шт'} товара`);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="quantity__modal">
				<h3>Выберите количество</h3>
				<div className="quantity__controls">
					<button
						onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
						disabled={quantity <= 1}
					>
						-
					</button>
					<span>
						{quantity} {isCable ? 'м' : 'шт'}
					</span>
					<button
						onClick={() => setQuantity((prev) => prev + 1)}
						disabled={quantity >= product.quantity}
					>
						+
					</button>
				</div>
				<p>Общая стоимость: {product.price * quantity} ₽</p>
				<div className="quantity__buttons">
					<ButtonModal name="Отмена" onClick={onClose} />
					<ButtonModal name="Подтвердить" onClick={handleConfirm} />
				</div>
			</div>
		</Modal>
	);
};
