function filterReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_FILTER':
            return [...state, action.payload];
        case 'REMOVE_FILTER':
            return state.filter(el => el !== action.payload)
        case 'REMOVE_ALL_FILTER':
            document.querySelectorAll('input[type="checkbox"]')
                .forEach(el => el.checked = false);
            return [];
        default:
            return state;
    }
}

export default filterReducer;