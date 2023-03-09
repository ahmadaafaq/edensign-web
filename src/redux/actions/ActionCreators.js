
export const fetchNewsSuccess = (articles) => {
    return {
        type: "FETCH_NEWS_SUCCESS",
        payload: articles,
    }
}

export const fetchNewsFail = (error) => {
    return {
        type: "FETCH_NEWS_FAIL",
        payload: error,
    }
}


export const fetchProductsSuccess = (products) => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products,
    }
}

export const fetchProductsFail = (error) => {
    return {
        type: "FETCH_PRODUCTS_FAIL",
        payload: error,
    }
}

