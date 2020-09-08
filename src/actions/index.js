import axios from 'axios';

export const getProducts = (dispatch) => {
	axios
		.get('https://think-carbon-neutral-shop.herokuapp.com/product')
		.then((res) => {
			dispatch({
				type: 'GET_PRODUCT',
				payload: res
			});
		})
		.catch((err) => {
			// handle error
			console.log(err);
		});
};

export const getProductstype = (key, type) => {
	return axios
		.get(`https://think-carbon-neutral-shop.herokuapp.com/product?category=${type}`)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			// handle error
			console.log(err);
		});
};

export const getProductslimit = (key, limit) => {
	return axios
		.get(`https://think-carbon-neutral-shop.herokuapp.com/product?limit=${limit}`)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			// handle error
			console.log(err);
		});
};
