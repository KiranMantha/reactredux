import React from "react";
import PropTypes from 'prop-types';


const Todo = ({todo, onTodoClick, todoIndex, onDeleteClick}) => (
    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        <span onClick={()=> { onTodoClick(todo.id) }}>{todo.text}</span> 
        <button onClick={()=> { onDeleteClick(todoIndex) }}>X</button>
    </li>
)

Todo.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    todoIndex: PropTypes.number.isRequired
}

export default Todo;