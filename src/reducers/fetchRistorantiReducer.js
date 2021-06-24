function fetchRistorantiReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_RISTORANTI':
            return action.payload;
        default:
            return state;
    }
}

export default fetchRistorantiReducer;