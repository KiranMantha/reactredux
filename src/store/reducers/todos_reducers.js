import STORE_CONSTANTS from '../constants';
import _ from 'lodash';
import { combineReducers } from 'redux'

let todos = (state = [], action) => {
    switch (action.type) {
        case STORE_CONSTANTS.ACTIONS.ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            break;
        }
        case STORE_CONSTANTS.ACTIONS.TOGGLE_TODO: {
            return state.map((todo, index) => {
                if (index === action.index) {
                    return _.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
            break;
        }
        default: {
          return state
        }
    }
}

let visibilityFilter = (state = STORE_CONSTANTS.VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case STORE_CONSTANTS.ACTIONS.SET_VISIBILITY_FILTER: {
            return action.filter
        }
        default: {
            return state
        }
    }
}

export const todoApp = combineReducers({ visibilityFilter, todos });
