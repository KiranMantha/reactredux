import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import TodoApp from './components/todo/todoApp.component';
import configureStore from './store/store';

const store = configureStore();

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       todos
//     }
//   }
//   render(){
//     return (
//       <TodoApp todos={this.state.todos}/>
//     )
//   }
// }


render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);