import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import filterReducer from "./filterReducer";
import searchReducer from "./searchReducer";
import preferitiReducer from "./preferitiReducer";

const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer,
    logged: loggedReducer,
    filtri: filterReducer,
    ristorantiPreferiti: preferitiReducer,
    /*TODO vedere dove valerio non ha usato il camelcase*/
    searchValue: searchReducer
})

export default allReducers;