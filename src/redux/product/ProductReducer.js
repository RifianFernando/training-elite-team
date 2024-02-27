import { ProductType } from './ProductTypes';

const initialState = {
    products: [],
    loading: false,
    error: '',
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductType.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ProductType.FETCH_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
                error: '',
            };
        case ProductType.FETCH_PRODUCTS_FAILURE:
            return {
                products: [],
                loading: false,
                error: action.payload,
            };
        case ProductType.DELETE_PRODUCT:
            // test dulu
            const updatedProducts = state.products.filter(
                (product) => product.id !== action.payload
            );
            return {
                ...state,
                products: updatedProducts,
            };
        default:
            return state;
    }
};

export default productReducer;
