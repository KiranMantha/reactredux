import {todoModel} from './models'
import { Dispatch } from 'redux';

export type itodoForm = {
    dispatch: Dispatch<any>
}

export type istate = {
    data: todoModel[]
}

export type itodo = {
    todo: todoModel
}

export type itodoList = {
    todos: todoModel[],
}