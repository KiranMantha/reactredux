import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../store/actions/todos_actions'

class TodoForm extends React.Component {    
    constructor(props){
        super(props);
        this.input;
        const {dispatch, onAddClick} = props;

        console.log(this);
    }
    render(){
    return(
            <div>
                <input ref={node => {
                this.input = node;
                }} />
                <button onClick={ () => { this.props.onAddClick(this.input.value); this.input.value = ''; }}>Add
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onAddClick: addTodo
    }, dispatch)
}

TodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoForm;
