import * as React from "react";
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../../store/actions/todos_actions'
import { Dispatch, bindActionCreators } from "redux";
import * as _ from 'lodash';


export class Todo extends React.Component {
    constructor(props){
        super(props);
        props = _.assign({}, props, this.DispatchProps);
        this.DispatchProps = {
            toggletodo : function(id){}
        }
    }
    
    render(){
        const { todo, toggletodo } = this.props;
        return(
            <li onClick={ toggletodo.bind(this, todo.id) }>todo.text</li>
        )
    }
}

function todoMapStateToProps(state) {
    return {
      todo: state.myAction.massagedFoo
    };
}

function todoMapDispatchToProps(dispatch)  {
    return {
        toggletodo: (id) => dispatch(toggleTodo(id))
    }
};

connect(todoMapStateToProps, todoMapDispatchToProps)(Todo);


export class TodoList extends React.Component {
    constructor(props){
        super(props);        
    }
    
    render(){
        const { todos } = this.props;
        const todoNode = todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} />)
        });
        return (<ul>{todoNode}</ul>);
    }
}