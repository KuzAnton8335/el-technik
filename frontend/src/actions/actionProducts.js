import { getProducts } from '../api/apiProducts.js';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsAction = () => async (dispatch) => {
	dispatch({ type: FETCH_PRODUCTS_REQUEST });
	try {
		const products = await getProducts();
		dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
	} catch (error) {
		dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
	}
};

// `http://localhost:3001/elmag/product/id/${id}`
export const fetchProductByIdAction = (id) => async (dispatch) => {
	dispatch({ type: 'FETCH_PRODUCT_REQUEST' });
	try {
		const response = await fetch(`/elmag/product/id/${id}`);
		const data = await response.json();
		dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: data });
	} catch (error) {
		dispatch({ type: 'FETCH_PRODUCT_FAILURE', error });
	}
};
