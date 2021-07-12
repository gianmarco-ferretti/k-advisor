import loggedReducer from "./loggedReducer";
import {combineReducers} from "redux";
import fetchRistorantiReducer from "./fetchRistorantiReducer";
import filterReducer from "./filterReducer";
import searchReducer from "./searchReducer";
import preferitiReducer from "./preferitiReducer";
import reservationReducer from "./reservationReducer";

const allReducers = combineReducers({
    ristoranti: fetchRistorantiReducer,
    logged: loggedReducer,
    filtri: filterReducer,
    ristorantiPreferiti: preferitiReducer,
    searchValue: searchReducer,
    prenotazioni: reservationReducer
})

export default allReducers;