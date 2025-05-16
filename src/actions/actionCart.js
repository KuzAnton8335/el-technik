export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

// добавляем товар в корзину
export const addToCartAction = (product, quantity = 1) => ({
	type: ADD_TO_CART,
	payload: {
		product,
		quantity,
	},
});

// Удаление товара из корзины
export const removeFromCartAction = (productId) => ({
	type: REMOVE_FROM_CART,
	payload: {
		productId,
	},
});

// Очистка корзины
export const clearCartAction = () => ({
	type: CLEAR_CART,
});
