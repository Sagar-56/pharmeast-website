/* eslint-disable default-case */
// import { addToCart } from '../Action/Action';
// import { ActionTypes } from '../constants/ActionTypes';

import { ActionTypes } from '../constants/ActionTypes'


// const initialState = {
//     cardData: [],
// }
const cardItems = (state = { cardData: JSON.parse(localStorage.getItem("cartData") || "[]") },action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CARD:
            // console.warn("reducer", state.cardData)
            return {
                // ...state,
                cardData: action.payload.cardData
            }
        case ActionTypes.REMOVE_TO_CARD:
            // state.length=state.length-1
            return {
                // ...state,
                cardData: action.payload.cardData
            }
        case ActionTypes.INCREMENT:
            return {
                // ...state,
                cardData:action.payload.cardData
            };
        case ActionTypes.DECREMENT:
            return {
                // ...state,
                cardData:action.payload.cardData
            };
        default:
            return state;
    }

}
export default cardItems;
// export const removeToCart = (state = [], action) => {
// switch (action.type) {
// case ActionTypes.REMOVE_TO_CARD:
// return [];
// default:
// return state;
// }
// }

// export const counterReducer = (state = 1, action) => {
    // switch (action.type) {
        // case ActionTypes.INCREMENT:
            // return state + 1;
        // case ActionTypes.DECREMENT:
            // return state - 1;
        // default:
            // return state;
    // }
//
// }
// export const productReducer = (state = initialState, { type, payload }) => {
    // switch (type) {
        // case ActionTypes.SET_PRODUCTS:
            // return {
                // ...state,
                // products: payload
            // }
        // case ActionTypes.FETCH_PRODUCTS:
            // return {
                // ...state,
                // products: payload
            // }
        // default:
            // return state;
    // }
// }
//
// export const selectedProductReducer = (state = {}, { type, payload }) => {
    // switch (type) {
        // case ActionTypes.SELECTED_PRODUCT:
            // return {
                // ...state,
                // ...payload
            // }
        // default:
            // return state;
    // }
// }
// 