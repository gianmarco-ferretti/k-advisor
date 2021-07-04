import axios from "axios";

export const fetchRistoranti = async (dispatch) => {
    const response = await axios.get('https://run.mocky.io/v3/61a70c98-751c-4e9c-b53b-a2f2752be0f6')
    dispatch({type: 'FETCH_RISTORANTI', payload: response.data})
}


export const fetchCommenti = (apiURL) => {
    return async function (dispatch) {
        if (apiURL) {
            const response = await axios.get(apiURL)
            dispatch({type: 'FETCH_COMMENTI', payload: response.data})
        }
    }
}

export const filterRistoranti = () => ({type: 'FILTER_RISTORANTI'})