import STORE_CONSTANTS from '../constants'
const idGenerator = require('uuid/v4');

export const addTodo = (todo) => ({
    type: STORE_CONSTANTS.ACTIONS.ADD_TODO,
    id: idGenerator(),
    text: todo
})

export const toggleTodo = (id) => ({
    type: STORE_CONSTANTS.ACTIONS.TOGGLE_TODO,
    id: id
})

export const deleteTodo = (index) => ({
    type: STORE_CONSTANTS.ACTIONS.DELETE_TODO,
    index: index
})

export const setVisibilityFilter = (filter) => ({
    type: STORE_CONSTANTS.ACTIONS.SET_VISIBILITY_FILTER,
    filter: filter
})