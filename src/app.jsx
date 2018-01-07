import * as React from "react";
import { render } from "react-dom";
//import { Provider } from 'react-redux';
import {TodoApp} from './components/todo/todoApp.component';
//import { configureStore } from './store/store';

//const store = configureStore();

const todos = [
  {
    text: 'test1',
    id:'123'
  },
  {
    text: 'test2',
    id:'456'
  }
]


render(
    <TodoApp todos={todos}/>,
  document.getElementById("root")
);