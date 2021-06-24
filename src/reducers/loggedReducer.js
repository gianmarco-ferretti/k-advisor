const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state; //equivale a state = true
        default:
            return state;
    }
}

export default loggedReducer;