import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";


const allReducers = combineReducers({
    fetchRistorantiReducer, loggedReducer
})

export default allReducers;