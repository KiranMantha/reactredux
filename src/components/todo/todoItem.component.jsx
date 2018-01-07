import * as React from "react";
//import { connect } from 'react-redux'
//import { addTodo, toggleTodo } from '../../store/actions/todos_actions'
//import { Dispatch, bindActionCreators } from "redux";
import _ from 'lodash';


export class Todo extends React.Component {
    constructor(props){
        super(props);        
    }
    
    render(){
        return(
            <li>{this.props.todo.text}</li>
        )
    }
}

export class TodoList extends React.Component {
    constructor(props){
        super(props);  
        console.log(this.props);      
    }   
    
    render(){
        const todoNode = _.map(this.props.todos, (todo, index) => {
            return (<Todo todo={todo} key={index} />)
        });
        return (<ul>{todoNode}</ul>);
    }
}