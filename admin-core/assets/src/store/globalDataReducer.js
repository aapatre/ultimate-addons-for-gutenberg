const globalDataReducer = ( state = {}, action ) => {
    switch (action.type) {
        case "UPDATE_INITIAL_STATE_FLAG":
            return {
                ...state,
                initialStateSetFlag: action.payload,
            };
        case "UPDATE_BLOCKS_ACTIVE_FILTER_TAB":
            return {
                ...state,
                activeBlocksFilterTab: action.payload
            };
        case "UPDATE_BLOCK_STATUSES":
            return {
                ...state,
                blocksStatuses: action.payload
            };
        case "UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB":
            return {
                ...state,
                activeSettingsNavigationTab: action.payload
            };
        case "UPDATE_FILE_GENERATION":
            return {
                ...state,
                enableFileGeneration: action.payload,
            };
        case "UPDATE_TEMPLATES_BUTTON":
            return {
                ...state,
                enableTemplates: action.payload,
            };
        case "UPDATE_BETA":
            return {
                ...state,
                enableBeta: action.payload,
            };
        default:
            return state;
    }
}

export default globalDataReducer;