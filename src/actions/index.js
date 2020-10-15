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

export const getProductstype = (key, type, brand, price, paginate) => {
	
	const params = {
		skip: paginate, 
		limit: 5
	}
	
	
	if(brand === null && price === null) {
		params.category = type
	} else if(price === null){
		params.category = type;
		params.brand = brand;
	}
	else if(brand === null){
		params.category = type;
		params.gt = price.min;
		params.lt = price.max;
	}
	else  {
		params.category =type;
		params.brand = brand;
		params.gt = price.min;
		params.lt = price.max;
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

export const getSearchedProducts = (key, text) => {
	if(text === ""){
		console.log(text)
		return null
	}
	else{
	return axios
		.get(`https://think-carbon-neutral-shop.herokuapp.com/product?text=${text}`)
		.then((res) => {
			return res.data.products;
		})
		.catch((err) => {
			// handle error
			console.log(err);
		});
	}
};

