import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddToDo from '../components/Addtodo';
import {addTodo} from '../redux/action';
import ShowList from '../components/ShowList';

class Todolist extends Component {
    render() {
        const {todoList, onAddClick} = this.props;
        return (
            <div>
                <AddToDo onAddClick={onAddClick}/>
                <ShowList todoList={todoList}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onAddClick: text => dispatch(addTodo(text))
    }
};

const mapStateToProps = (state) => {
    return {

        todoList: state.todo
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
