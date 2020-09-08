import getProducts from './getProducts';
import getProductsType from './getProductsType';
import getProductslimit from './getProductslimit';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	products: getProducts,
	productsbytype: getProductsType,
	productsbylimit: getProductslimit
});

export default allReducers;
