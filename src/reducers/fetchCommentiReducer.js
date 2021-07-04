function fetchCommentiReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_COMMENTI':
            /*           return Object.assign(state, action.payload);*/
            return {
             /*   ...state, arr: [...state.arr, action.payload]*/
            }

        default:
            return state;
    }
}

export default fetchCommentiReducer;
