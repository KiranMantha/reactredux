import React from "react";
//import { connect } from 'react-redux'
//import { addTodo, toggleTodo } from '../../store/actions/todos_actions'
//import { Dispatch, bindActionCreators } from "redux";
import _ from 'lodash';
import PropTypes from 'prop-types';


const Todo = ({todo}) => (
    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</li>
)

Todo.propTypes = {
    //onClick: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

export default Todo;