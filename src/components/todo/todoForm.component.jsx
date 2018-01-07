import * as React from "react";
//import { connect } from 'react-redux'
//import { addTodo } from '../../store/actions/todos_actions'
//import { Dispatch } from "redux";

export class TodoForm extends React.Component {
    constructor(props){
        super(props);
    }
    input;
    render(){
        return (
            <div>
                <input ref={node => {
                this.input = node;
                }} />
                <button>Add
                </button>
            </div>
        );
    }
}