import * as constants from './Constants';
import { getProducts } from '../services/ProductServices'

export const getProductRequest = () => ({
  type: constants.PRODUCT_REQUEST
});

export const getProductsSuccess = (products) => ({
  type: constants.PRODUCT_LIST_SUCCESS,
  payload: {
    data : products
  }
});

export const fetchProductSuccess = (product) => ({
  type: constants.PRODUCT_FETCH_SUCCESS,
  payload: {
    data : product
  }
});

export const productError = (error) => ({
  type: constants.PRODUCT_ERRROR,
  payload : {
      error
  }
});

// export const productRequest3 = () => {
//   return (dispatch) => {
//       return new Promise((resolve, reject) => {
//           getProducts()
//             .then((productlist) => {
//                 dispatch(getProductsSuccess(productlist));
//                 resolve(productlist);
//                 })
//             .catch(error => {
//                 //dispatch(productError(error));
//                 console.log(error);
//                 reject(error);
//             });
//         }
//     )}
// };

export const productRequest = () => {
  return (dispatch) => {
          dispatch(getProductRequest())
          getProducts()
            .then((productlist) =>  dispatch(getProductsSuccess(productlist)))
            .catch(error =>dispatch(productError(error)));
        }
};