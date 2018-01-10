import React from "react";
//import { connect } from 'react-redux'
//import { addTodo, toggleTodo } from '../../store/actions/todos_actions'
//import { Dispatch, bindActionCreators } from "redux";
import _ from 'lodash';
import PropTypes from 'prop-types';


const Todo = ({todo, onclick}) => (
    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={()=> {onclick(todo.id)}}>{todo.text}</li>
)

Todo.propTypes = {
    onclick: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

export default Todo;