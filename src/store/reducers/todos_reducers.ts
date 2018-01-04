import { STORE_CONSTANTS } from '../constants';
import * as _ from 'lodash';
import { todoModel } from '../../components/todo/models';
import { combineReducers } from 'redux'

const todos = (state:todoModel[] = [], action:any) => {
    switch (action.type) {
        case STORE_CONSTANTS.ACTIONS.ADD_TODO: {
            return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            
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
            
        }
        default: {
          return state
        }
    }
}

const visibilityFilter = (state = STORE_CONSTANTS.VisibilityFilters.SHOW_ALL, action:any) => {
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
