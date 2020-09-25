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

export const getProductstype = (key, type, brand) => {
	const params = {}
	
	if(brand === null) {
		params.category = type
	} else  {
		params.category =type;
		params.brand = brand;
	}
	return axios
		.get(`https://think-carbon-neutral-shop.herokuapp.com/product`,{
			params:params
		})
		.then((res) => {
			return res.data;
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

export const getSingleProduct = (key, id) => {
	return axios
		.get(`https://think-carbon-neutral-shop.herokuapp.com/product/${id}`)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			// handle error
			console.log(err);
		});
};
