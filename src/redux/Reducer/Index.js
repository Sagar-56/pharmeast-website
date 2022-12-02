import { combineReducers } from 'redux';
import cardItems from "./reducer";
// import { counterReducer } from './reducer';
// import { productReducer, selectedProductReducer } from './reducer';


export const reducers = combineReducers({
    cardItems,
    // counterReducer,
    // allProducts: productReducer,
    // product: selectedProductReducer,
})

