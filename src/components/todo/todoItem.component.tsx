import * as React from "react";
import { connect } from 'react-redux'
import {istate, itodoForm, itodo, itodoList} from './interfaces';
import { addTodo, toggleTodo } from '../../store/actions/todos_actions'
import { Dispatch } from "redux";

export class Todo extends React.Component<itodo>{
    constructor(props: any){
        super(props);        
    }
    render(){
        const { todo } = this.props;
        return(
            <li onClick={ toggletodo(todo.id) }>todo.text</li>
        )
    }
}

const todoMapDispatchToProps = (dispatch: Dispatch<any>) => ({
    toggletodo: (id:string) => dispatch(toggleTodo(id))
});

connect(todoMapDispatchToProps)(Todo);

export class TodoList extends React.Component<itodoList>{
    constructor(props: any){
        super(props);        
    }
    
    render(){
        const todoNode = this.props.todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} />)
        });
        return (<ul>{todoNode}</ul>);
    }
}