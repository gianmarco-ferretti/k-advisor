import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import fetchCommentiReducer from "./fetchCommentiReducer";
import filterReducer from "./filterReducer";


const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer, logged: loggedReducer, commenti: fetchCommentiReducer, filtri: filterReducer
})

export default allReducers;