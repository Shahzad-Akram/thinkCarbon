const getProducts = (state = null, action) => {
	switch (action.type) {
		case 'GET_PRODUCT':
			return (state = action.payload);

		default:
			return state;
	}
};
export default getProducts;
