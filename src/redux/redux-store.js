import { combineReducers, createStore } from "redux";
import clockReducer from "./clockReducer";
import dateReducer from "./dateReducer";
import themeReducer from "./themeReducer"

let reducers = combineReducers(
    {
        themeReducer: themeReducer, 
        clockReducer: clockReducer,
        dateReducer: dateReducer,
    });

let store = createStore(reducers);

export default store;