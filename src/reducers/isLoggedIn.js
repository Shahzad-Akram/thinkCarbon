

//  const isLoggedIn = (state , action) => {
//     console.log('isloggedin to work')
//     const payload = localStorage.getItem('auth-admin');
//     const {token, user} = JSON.parse(payload);
//     switch (action.type) {
// 		case 'IS_USER_LOGIN':
//             if(payload !== null)
//             {   
//                 return (
//                 Object.assign({}, state, {
//                 user: user,
//                 token: token,
//                 isAuthenticated: true,
//                 isLoading :false,
//                 })
//             )}
//             else
//             {
//                 return (
//                     Object.assign({}, state, {
//                     isLoading :false
//                     })
//                 ) 
                
//             }
			
                
// 		default:
// 			return state;
//     }
// }
// export default isLoggedIn