const STORE_CONSTANTS = {
    ACTIONS: {
        ADD_TODO: 'ADD_TODO',
        TOGGLE_TODO: 'TOGGLE_TODO',
        SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
    },

    VisibilityFilters: {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_COMPLETED: 'SHOW_COMPLETED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
    },

    initialState: {
        visibilityFilter: 'SHOW_ALL',
        todos: []
    } 
}

export default STORE_CONSTANTS;