import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { allReducers } from './reducers/index';

export const Store = createStore(allReducers, applyMiddleware(thunk));
