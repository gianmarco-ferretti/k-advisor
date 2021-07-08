function searchReducer(state = [], action) {
    switch (action.type) {
        case "ADD_SEARCH":
            return [...state, action.payload];
        case "REMOVE_ALL_SEARCH":
            return [];
        default:
            return state;
    }
}

export default searchReducer;