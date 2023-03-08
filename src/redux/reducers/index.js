import { combineReducers } from "redux";
import NewsReducer, { ProductReducer } from './AppReducer';


export const allReducers = combineReducers({
    allNews: NewsReducer,
    allProducts: ProductReducer
})
