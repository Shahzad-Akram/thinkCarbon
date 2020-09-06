import getProducts from './getProducts';
import getProductsType from './getProductsType';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	products: getProducts,
	productsbytype: getProductsType
});

export default allReducers;
