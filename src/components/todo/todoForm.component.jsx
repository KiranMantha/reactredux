import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../store/actions/todos_actions'

class TodoForm extends React.Component {    
    constructor(props){
        super(props);
        this.input;
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

//inject the data to state of component
function mapStateToProps(state){
    return {}
}

//inject the actions to props
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onAddClick: addTodo
    }, dispatch)
}

//connect acts as a DI layer hence no need to pass props explicitly
//the data in the store can be accessed via state through 'mapStateToProps'
//the actions can be injected via 'mapDispatchToProps'
TodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoForm);
export default TodoForm;
