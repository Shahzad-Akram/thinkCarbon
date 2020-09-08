const getProductslimit = (state = null, action) => {
	switch (action.type) {
		case 'GET_PRODUCT_BY_LIMIT':
			return (state = action.payload);

		default:
			return state;
	}
};
export default getProductslimit;
