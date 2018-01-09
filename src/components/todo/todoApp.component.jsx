import React from "react";
import VisibleTodoList from './todoList.component';
import TodoForm from './todoForm.component';

const TodoApp = () => (
  <div>
    <TodoForm />
    <VisibleTodoList />
  </div>
)

export default TodoApp;