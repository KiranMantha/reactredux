import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {TodoApp} from './components/todo/todoApp.component';
import { configureStore } from './store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);