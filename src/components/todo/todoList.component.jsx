import React from "react";
import PropTypes from 'prop-types';
import Todo from './todoItem.component';
import { connect } from 'react-redux';
import STORE_CONSTANTS from '../../store/constants';
import { toggleTodo, deleteTodo } from '../../store/actions/todos_actions';


const TodoList = ({todos, onTodoClick, onDeleteClick}) => (
    <ul>{
        _.map(todos, (todo, index) => {
            return (<Todo todo={todo} key={index} todoIndex={index} onTodoClick={onTodoClick} onDeleteClick={onDeleteClick}/>)
        })
    }</ul>
)

TodoList.protoTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case STORE_CONSTANTS.VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case STORE_CONSTANTS.VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      case STORE_CONSTANTS.VisibilityFilters.SHOW_ALL:
      default:
        return todos
    }
}
  
const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        },
        onDeleteClick: index => {
            dispatch(deleteTodo(index))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;