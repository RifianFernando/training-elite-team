import { ProductType } from './ProductTypes';
import { productApi } from '../../api/productApi';

// action to fetch all products
export const fetchProductsRequest = () => {
    return {
        type: ProductType.FETCH_PRODUCTS_REQUEST,
    };
};

export const fetchProductsSuccess = (products) => {
    return {
        type: ProductType.FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
};

export const fetchProductsFailure = (error) => {
    return {
        type: ProductType.FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
};

export const deleteProduct = (product) => {
    return {
        type: ProductType.FETCH_PRODUCTS_FAILURE,
        payload: product,
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        productApi
            .getProducts()
            .then((res) => {
                const products = res.data;
                dispatch(fetchProductsSuccess(products));
            })
            .catch((err) => {
                const msg = err.message;
                dispatch(fetchProductsFailure(msg));
            });
    };
};
