import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
    books: booksReducer,
    cities: citiesReducer
});

export default rootReducer;