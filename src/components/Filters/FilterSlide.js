const initState = {
    search: '',
    state: 'All',
    priority: []
}

const filterReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'filter/setSearchFilter':
            return {
                ...state,
                search: action.payload
            }
        case 'filter/setStateFilter':
            return {
                ...state,
                state: action.payload
            }
        case 'filter/setPriorityFilter':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state;
    }

}

export default filterReducer;

