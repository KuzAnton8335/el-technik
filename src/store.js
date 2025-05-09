import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import productsReducer from './reducers/productsReducer';
import  productAddReducer  from './reducers/productAddReducer';
import productGetReducer from './reducers/productGetReducer';

// редьюсер для настройки store

const reducer = combineReducers({
	products: productsReducer,
	card: cardReducer,
	add: productAddReducer,
	get:productGetReducer,
});

// подключаем расширение для redux-devTools compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
