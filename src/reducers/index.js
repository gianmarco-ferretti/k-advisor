import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import filterReducer from "./filterReducer";
import SearchReducer from "./searchreducer";


const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer, logged: loggedReducer, filtri: filterReducer, searchvalue: SearchReducer
})

export default allReducers;