import {ADD_PRODUCT, RESET_PRODUCT_FORM} from "../actions/productAddActions"

const initialState = {
	products: [],
	currentProduct: {
		id: '',
		category: '',
		title: '',
		description: '',
		price: '',
		quantity: '',
		image: null,
	},
};

const productAddReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		case RESET_PRODUCT_FORM:
			return {
				...state,
				currentProduct: initialState.currentProduct,
			};
		default:
			return state;
	}
};

export default productAddReducer;
