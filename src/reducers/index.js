import getProducts from './getProducts';
import getProductsType from './getProductsType';
import getProductslimit from './getProductslimit';
import getSingleProduct from './getSingleProduct';
import loginUser from './loginUser';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	products: getProducts,
	productsbytype: getProductsType,
	productsbylimit: getProductslimit,
	productbyid: getSingleProduct,
	user: loginUser,
	
});


export default allReducers;
