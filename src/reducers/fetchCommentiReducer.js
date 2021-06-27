

function fetchCommentiReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_COMMENTI':
            return action.payload;
        default:
            return state;
    }
}

export default fetchCommentiReducer;    