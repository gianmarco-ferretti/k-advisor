import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import fetchCommentiReducer from "./fetchCommentiReducer";


const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer, logged: loggedReducer, commenti: fetchCommentiReducer
})

export default allReducers;