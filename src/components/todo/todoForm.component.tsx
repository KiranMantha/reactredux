import * as React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todos_actions'
import { Dispatch } from "redux";

export class TodoForm extends React.Component {
    constructor(props:any){
        super(props);
    }
    private input:HTMLInputElement;
    render(){
        return (
            <div>
                <input ref={node => {
                this.input = node;
                }} />
                <button onClick={ AddClick(this.input.value) }>
                </button>
            </div>
        );
    }
}

const todoFormMapDispatchToProps = (dispatch: Dispatch<any>) => ({
    AddClick: (text:string) => dispatch(addTodo(text))
});

connect(todoFormMapDispatchToProps)(TodoForm);