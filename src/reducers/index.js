import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import filterReducer from "./filterReducer";
import SearchReducer from "./searchreducer";
import preferitiReducer from "./preferitiReducer";


const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer,
    logged: loggedReducer,
    filtri: filterReducer,
    ristorantiPreferiti: preferitiReducer,
    /*TODO vedere dove valerio non ha usato il camelcase*/
    searchvalue: SearchReducer
})

export default allReducers;