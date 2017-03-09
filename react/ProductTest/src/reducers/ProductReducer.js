import * as constants from '../actions/Constants';
import typeToReducer from 'type-to-reducer'

const INITIAL_STATE = {
  products : [],
  isLoading: false,
  error: false
};

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case constants.PRODUCT_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//         isError: false 
//     };

//     case constants.PRODUCT_FETCH_SUCCESS:
//       return { 
//         ...state,
//         products: action.payload.data 
//     };

//     case constants.PRODUCT_LIST_SUCCESS:
//       return { 
//         ...state,
//         products : action.payload.data,
//         isLoading: false 
//     };

//     case constants.PRODUCT_ERRROR:
//       return { 
//         ...state, 
//         isLoading: false,
//         error: true 
//     };

//     default:
//       return state;
//   }
// };