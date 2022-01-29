const globalDataReducer = ( state = {}, action ) => {
    switch (action.type) {
        case "UPDATE_ACTIVE_FILTER_TAB":
            return {
                ...state,
                activeFilterTab: action.payload
            };
        case "UPDATE_BLOCK_STATUSES":
            return {
                ...state,
                blocksStatuses: action.payload
            };
        default:
            return state;
    }
}

export default globalDataReducer;