function filterReducer(state = [], action) {
    switch (action.type) {
        case 'FILTER_RISTORANTI':
            return console.log('premuto filtro ristorante');
        default:
            return state;
    }
}

export default filterReducer;