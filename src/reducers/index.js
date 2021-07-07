import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import filterReducer from "./filterReducer";


const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer, logged: loggedReducer, filtri: filterReducer
})

export default allReducers;