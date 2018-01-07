import * as React from "react";
import {istate} from './interfaces';
import { todoModel } from './models';
import { TodoList } from './todoItem.component';
import { TodoForm } from './todoForm.component';
const idGenerator = require('uuid/v4');



export class TodoApp extends React.Component {
    constructor(props) {
        super(props);        
    }

    render(){
        return (
          <div>
            <TodoForm />
            <TodoList 
              todos={this.state.data} 
            />
          </div>
        );
      }
}