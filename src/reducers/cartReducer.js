import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../actions/actionCart';

const initialState = {
	items: [],
	total: 0,
};
const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		// добавления товара в корзину
		case ADD_TO_CART: {
			const existingItemIndex = state.items.findIndex(
				(item) => item.product.id === action.payload.product.id,
			);

			if (existingItemIndex >= 0) {
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex].quantity += action.payload.quantity;

				return {
					...state,
					items: updatedItems,
					total:
						state.total +
						action.payload.product.price * action.payload.quantity,
				};
			} else {
				return {
					...state,
					items: [...state.items, action.payload],
					total:
						state.total +
						action.payload.product.price * action.payload.quantity,
				};
			}
		}
		// удаления товара из корзины
		case REMOVE_FROM_CART: {
			const existingItemIndex = state.items.findIndex(
				(item) => item.product.id === action.payload.product,  // изменен на ProductID
			);
			if (existingItemIndex >= 0) {
				const itemToRemove = state.items[existingItemIndex];
				const updatedItems = [...state.items];
				updatedItems[existingItemIndex].quantity -= 1;

				if (updatedItems[existingItemIndex].quantity <= 0) {
					updatedItems.splice(existingItemIndex, 1);
				}

				return {
					...state,
					items: updatedItems,
					total: state.total - itemToRemove.product.price,
				};
			}
			return state;
		}
		// очистки корзины
		case CLEAR_CART: {
			return initialState; // Возврат в исходное состояние
		}
		default:
			return state; // Это должно быть последнее значение по умолчанию
	}
};

export default cartReducer;
