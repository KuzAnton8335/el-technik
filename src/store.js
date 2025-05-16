import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import cartReducer from './reducers/cartReducer';
import productAddReducer from './reducers/productAddReducer';
import productGetReducer from './reducers/productGetReducer';
import productsReducer from './reducers/productsReducer';

// редьюсер для настройки store

const reducer = combineReducers({
	products: productsReducer,
	card: cardReducer,
	add: productAddReducer,
	get: productGetReducer,
	cart: cartReducer,
});

// подключаем расширение для redux-devTools compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
