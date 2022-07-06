export const productListReducer = (currentProductListState = {products: null, productsPageNumber: null, isLoading: false, productListDataReceived: false}, action) => {
    if(action.type === 'PRODUCT_LIST_STATE_LOADING') {
        return {...currentProductListState, isLoading: true, productListDataReceived: false};
    } else if(action.type === 'PRODUCT_LIST_STATE_LOADED') {
        return {products: action.payload.products, productsPageNumber: action.payload.productsPageNumber, isLoading: false, productListDataReceived: true};
    }

    return currentProductListState;
}

export const productReducer = (currentProductReducer = {product: null, isLoading: false, productDataReceived: false}, action) => {
    if(action.type === 'PRODUCT_STATE_LOADING') {
        return {product: null, isLoading: true, productDataReceived: false};
    } else if(action.type === 'PRODUCT_STATE_LOADED') {
        return {product: action.payload, isLoading: false, productDataReceived: true};
    } else if(action.type === 'PRODUCT_STATE_LOADING_FAILED') {
        return {product: null, isLoading: false, productDataReceived: false};
    }

    return currentProductReducer;
}

export const productsCountInDBReducer = (productsCountInDB = null, action) => {
    if(action.type === 'PRODUCTS_COUNT_IN_DB_LOADED') {
        return action.payload;
    }

    return productsCountInDB;
}

