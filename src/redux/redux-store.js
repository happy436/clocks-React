import { combineReducers, createStore, applyMiddleware } from "redux";
import clockReducer from "./clockReducer";
import dateReducer from "./dateReducer";
import themeReducer from "./themeReducer"
import thunk from 'redux-thunk'

let reducers = combineReducers(
    {
        themeReducer: themeReducer, 
        clockReducer: clockReducer,
        dateReducer: dateReducer,
    });

let store = createStore(reducers, applyMiddleware(thunk));

export default store;