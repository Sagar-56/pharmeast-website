
import {ActionTypes} from '../constants/ActionTypes';

// import ApiStore from "../../Apis/ApiStore";
// import { ActionTypes } from "../constants/ActionTypes";

export const addToCart = (data) =>(dispatch, getState)=> {
    const cardData = getState().cardItems.cardData.slice();
    let alreadyExists=false;
    cardData.forEach((x) => {
        if(x.id=== data.id){
            alreadyExists=true;
        }
    });
    if(!alreadyExists){
        cardData.push({...data});
    }
    dispatch ({
        type: ActionTypes.ADD_TO_CARD,
        // data: data,
        payload:{cardData}
    });
    localStorage.setItem("cartData", JSON.stringify(cardData))
}

export const RemoveToCart = (data) =>(dispatch, getState)=> {
    const cardData=getState().cardItems.cardData.slice().filter((x)=>x.id !== data.id)
    dispatch( {
        type: ActionTypes.REMOVE_TO_CARD,
        // data: data,
        payload: {cardData},
    })
    localStorage.setItem("cartData",JSON.stringify(cardData))

}

export const Increment=(data)=>(dispatch, getState)=>{
    const cardData = getState().cardItems.cardData.slice();
    const selectedProduct= cardData.find((item)=> item.id===data.id)
    const index = cardData.indexOf(selectedProduct);
    const value=cardData[index];
    // console.warn("value", value)
    value.qty =value.qty+=1;
    // console.warn("value.qty", value.qty)
    
    // let alreadyExist=false

    // if(value.qty<3){
    //   return value.qty = false
    // }



    value.total=value.qty*value.price;
    value.total.toFixed(2)
    // console.warn("value.total", value.total.toFixed(2))

    dispatch({
        type: ActionTypes.INCREMENT,
        // data: data,
        payload:{cardData},
    });
    localStorage.setItem("cartData",JSON.stringify(cardData));
}
export const Decrement=(data)=>(dispatch, getState)=>{
    const cardData = getState().cardItems.cardData.slice();
    const selectedProduct= cardData.find((item)=> item.id===data.id)
    const index = cardData.indexOf(selectedProduct);
    const value=cardData[index];
    
    if(value.qty>1){
        value.qty = value.qty - 1;
        value.total = value.qty * value.price;

    }
    dispatch({
        type: ActionTypes.DECREMENT,
        // data: data,
        payload:{cardData},
    });
    localStorage.setItem("cartData",JSON.stringify(cardData))

}

// export const fetchProducts =  () => async (dispatch) =>{
    //   const response = await ApiStore.get("/DealsPage2");
    //   dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
    //   console.log("response", response.data) 
// 
// }
// 
// 
// 
// export const fetchProduct =  (state_id) => async (dispatch) =>{
    //  await ApiStore.get(`/DealsPage2?${state_id}`).then((response)=>{
        // dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data})
        // console.log("response",response) 
    // });
    // 
    // console.log(response) 
// 
// }
// export const setProducts = (products) => {
    // return {
        // type: ActionTypes.SET_PRODUCTS,
        // payload: products,
    // }
// 
// }
// 
// export const selectedProduct = (product) => {
    // return {
        // type: ActionTypes.SELECTED_PRODUCT,
        // payload: product,
    // }
// 
// }


// export const addToCart = (data) => {
    // console.log("action data", data)
    // return {
        // type: ADD_TO_CARD,
        // data: data
    // }
// }
// 
// 
// export const RemoveToCart = (data) => {
    // return {
        // type: 'REMOVE_TO_CARD',
        // data: data
    // }
// }