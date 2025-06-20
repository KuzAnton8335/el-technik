
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
	type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = (products) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload: products
});

export const fetchProductsFailure = (error) => ({
	type: FETCH_PRODUCTS_FAILURE,
	payload: error
});

// Асинхронный action для загрузки товаров
export const fetchProducts = () => {
	return async (dispatch) => {
		dispatch(fetchProductsRequest());
		try {
			// Здесь делаем запрос к вашему API
			const response = await fetch('http://localhost:3001/elmag/product');
			const data = await response.json();
			dispatch(fetchProductsSuccess(data));
		} catch (error) {
			dispatch(fetchProductsFailure(error.message));
		}
	};
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		dispatch({ type: 'DELETE_PRODUCT_REQUEST' });
		const response = await fetch(`http://localhost:3001/elmag/product/${id}`, {
			method: 'DELETE',
		});
		const data = await response.json();
		dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: id });
	} catch (error) {
		dispatch({ type: 'DELETE_PRODUCT_FAILURE', payload: error.message });
	}
};

export const updateProduct = (id, updatedData) => async (dispatch) => {
	try {
		dispatch({ type: 'UPDATE_PRODUCT_REQUEST' });
		const response = await fetch(`http://localhost:3001/elmag/productd/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedData),
		});
		const data = await response.json();
		dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: data });
	} catch (error) {
		dispatch({ type: 'UPDATE_PRODUCT_FAILURE', payload: error.message });
	}
};
