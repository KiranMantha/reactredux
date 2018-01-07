import { STORE_CONSTANTS } from '../constants'
const idGenerator = require('uuid/v4');

export const addTodo = (todo: string) => ({
    type: STORE_CONSTANTS.ACTIONS.ADD_TODO,
    id: idGenerator(),
    text: todo
})

export const toggleTodo = (id:string) => ({
    type: STORE_CONSTANTS.ACTIONS.TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = (filter:string) => ({
    type: STORE_CONSTANTS.ACTIONS.SET_VISIBILITY_FILTER,
    filter: filter
})