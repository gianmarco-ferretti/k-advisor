function reservationReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RESERVATION':
            return [...state, action.payload];
        case 'REMOVE_RESERVATION':
            return state.filter(el => el !== action.payload)
        default:
            return state;
    }
}

export default reservationReducer;