const getProductsType = (state = null, action) => {
	switch (action.type) {
		case 'GET_PRODUCT_BY_TYPE':
			return (state = action.payload);

		default:
			return state;
	}
};
export default getProductsType;
