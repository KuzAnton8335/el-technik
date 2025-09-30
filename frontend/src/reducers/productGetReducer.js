import {
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	FETCH_PRODUCTS_FAILURE,
} from '../actions/actionGetProducts';

const initialState = {
	loading: true,
	products: [],
	error: '',
}

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_REQUEST:
			return {
				...state,
				loading: true
			};
		case FETCH_PRODUCTS_SUCCESS:
			return {
				loading: false,
				products: action.payload,
				error: ''
			};
		case FETCH_PRODUCTS_FAILURE:
			return {
				loading: false,
				products: [],
				error: action.payload
			};
		case 'DELETE_PRODUCT_SUCCESS':
			return {
				...state,
				products: state.products.filter(product => product.id !== action.payload),
				loading: false,
			};

		case 'UPDATE_PRODUCT_SUCCESS':
			return {
				...state,
				products: state.products.map(product =>
					product.id === action.payload.id ? action.payload : product
				),
				loading: false,
			};
		default:
			return state;
	}
};

export default productsReducer;
