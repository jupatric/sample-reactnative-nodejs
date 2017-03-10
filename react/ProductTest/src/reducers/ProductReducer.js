//import * as constants from '../actions/Constants';
//import { PRODUCT_FETCH_SUCCESS, PRODUCT_LIST_SUCCESS, PRODUCT_REQUEST, PRODUCT_ERROR } from '../actions/Constants';
import { PRODUCT } from '../actions/Constants';
import typeToReducer from 'type-to-reducer'

const INITIAL_STATE = {
  products : [],
  isLoading: false,
  error: false
};

// export default reducer = typeToReducer({
//   [PRODUCT_FETCH_SUCCESS]: (state, action) => ({
//     ...state,
//     products: action.payload.data
//   }),
//   [PRODUCT_LIST_SUCCESS]: (state, action) => ({
//     ...state,
//     products: action.payload.data,
//     isLoading: false
//   }),
//   [PRODUCT_REQUEST]: () => ({
//     ...state,
//     isLoading : true,
//     error: false
//   }),
//   [PRODUCT_ERROR]: (state, action) => ({
//     ...state,
//     isLoading : false,
//     error : true
//   })
// }, INITIAL_STATE)

export default reducer = typeToReducer({
  [ PRODUCT ]: {
    _REQUEST: () => ({
      ...state,
      isLoading: true,
      error: false
    }),
    _FETCH_SUCCESS: (state, action) => ({
      ...state,
      products: action.payload.data
    }),
    _LIST_SUCCESS: (state, action) => ({
      ...state,
      products : action.payload.data,
      isLoading: false
    }),
    _ERROR: (state, action) => ({
      ...state,
      isLoading: false,
      error : true
    })
  }
}, INITIAL_STATE)
                                          

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

//     case constants.PRODUCT_ERROR:
//       return { 
//         ...state, 
//         isLoading: false,
//         error: true 
//     };

//     default:
//       return state;
//   }
// };