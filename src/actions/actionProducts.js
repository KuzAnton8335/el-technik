// actions.js
import { fetchProducts, fetchProductsByCategory, fetchProductDetails } from '../api/apiProducts.js'; // Импортируйте ваши функции

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsAction = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_PRODUCTS_REQUEST });
		try {
			const products = await fetchProducts();
			dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
		}
	};
};

export const fetchProductsByCategoryAction = (category) => {
	return async (dispatch) => {
		dispatch({ type: FETCH_PRODUCTS_REQUEST });
		try {
			const products = await fetchProductsByCategory(category);
			dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
		}
	};
};

export const fetchProductDetailsAction = () => {
	return async (dispatch) => {
		dispatch({ type: FETCH_PRODUCTS_REQUEST });
		try {
			const products = await fetchProductDetails();
			dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
		} catch (error) {
			dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
		}
	};
};

