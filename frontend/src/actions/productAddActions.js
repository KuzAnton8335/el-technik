export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RESET_PRODUCT_FORM = 'RESET_PRODUCT_FORM';
// 'http://localhost:3001/elmag/product'
export const addProduct = (productData) => async (dispatch) => {
	try {
		const response = await fetch('/elmag/product', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(productData),
		});

		if (!response.ok) {
			throw new Error('Ошибка при добавлении товара');
		}

		const newProduct = await response.json();

		dispatch({
			type: ADD_PRODUCT,
			payload: newProduct,
		});

		return newProduct;
	} catch (error) {
		console.error('Ошибка при добавлении товара:', error);
		throw error;
	}
};
