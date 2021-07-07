function filterReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RISTORANTE':
            return [...state, action.payload];
        case 'REMOVE_RISTORANTE':
            return state.filter(el => el !== action.payload)
        default:
            return state;
    }
}

export default filterReducer;