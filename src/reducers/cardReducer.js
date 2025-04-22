const initialState = {
	products: [], // для списка товаров (если нужно)
	currentProduct: null, // для хранения одного товара
	loading: false,
	error: null,
};

const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_PRODUCT_REQUEST':
			return { ...state, loading: true, error: null };
		case 'FETCH_PRODUCT_SUCCESS':
			return {
				...state,
				loading: false,
				currentProduct: action.payload, // сохраняем полученный товар
			};
		case 'FETCH_PRODUCT_FAILURE':
			return { ...state, loading: false, error: action.error };
		default:
			return state;
	}
};
export default cardReducer;
