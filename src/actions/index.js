import axios from "axios";

export const fetchRistoranti = async (dispatch) => {
    const response = await axios.get('https://run.mocky.io/v3/61a70c98-751c-4e9c-b53b-a2f2752be0f6')
    dispatch({type: 'FETCH_RISTORANTI', payload: response.data})
}

export const addFilter = (categoria) => {
    return {type: 'ADD_FILTER', payload: categoria}
}

export const removeFilter = (categoria) => {
    return {type: 'REMOVE_FILTER', payload: categoria}
}

export const removeAllFilter = () => {
    return {type: 'REMOVE_ALL_FILTER'}
}

export const addSearch = (searchterm) => {
        return {type : 'ADD_SEARCH' , payload:searchterm}
}
export const removeAllSearch =  () => {
        return {type :"REMOVE_ALL_SEARCH"}
}