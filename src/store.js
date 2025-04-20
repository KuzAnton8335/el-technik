
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import  productsReducer  from './reducers/productsReducer';

// редьюсер для настройки store

const reducer = combineReducers({
	products:productsReducer,
})

// подключаем расширение для redux-devTools compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
