import { STORE_CONSTANTS } from '../constants';

const idGenerator = require('uuid/v4');

export const addTodo = (todo: string) => ({
    type: STORE_CONSTANTS.ACTIONS.ADD_TODO,
    id: idGenerator(),
    text: todo
})