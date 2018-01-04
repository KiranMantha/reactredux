import { todoModel } from '../components/todo/models'

export namespace STORE_CONSTANTS {
    export const ACTIONS = {
        ADD_TODO: 'ADD_TODO',
        TOGGLE_TODO: 'TOGGLE_TODO',
        SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
    }

    export const VisibilityFilters = {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_COMPLETED: 'SHOW_COMPLETED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
    }

    export const initialState = {
        visibilityFilter: VisibilityFilters.SHOW_ALL,
        todos: new Array<todoModel>()
    }

    export interface IState {
        visibilityFilter: string,
        todos: todoModel[]
    }
}