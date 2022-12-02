// @ts-nocheck
import { applyMiddleware, compose, createStore } from 'redux'
import { reducers } from './Reducer/Index';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// composeEnhancers(applyMiddleware(thunk))
// @ts-ignore
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)))

export default store;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()