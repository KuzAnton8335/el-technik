import { fetchProducts } from '../api/apiProducts.js';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsAction = () => async (dispatch) => {
	dispatch({ type: FETCH_PRODUCTS_REQUEST });
	try {
		const products = await fetchProducts();
		dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
	} catch (error) {
		dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
	}
};



