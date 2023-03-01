
export const productState = {
    loading: false,
    products: [],
    error: '',
};


export const newsState = {
    loading: false,
    articles: [],
    error: '',
};



export const ProductReducer = (state = productState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCTS_SUCCESS":
          return {
            loading: false,
            products: action.payload,
            error: ''
          }
        case "FETCH_PRODUCTS_FAIL":
          return {
            loading: false,
            products: [],
            error: 'The following error occurred: ' + action.payload
          }
        default:
          return state;
    }
}


const NewsReducer = (state = newsState, action) => {
    switch(action.type) {
        case "FETCH_NEWS_SUCCESS":
          return {
            ...state,
            loading: false,
            articles: action.payload,
            error: ''
          }
        case "FETCH_NEWS_FAIL":
          return {
            ...state,
            loading: false,
            articles: [],
            error: 'The following error occurred: ' + action.payload
          }
        default:
          return state;
    } 
}


export default NewsReducer;
