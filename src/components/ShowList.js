import React, {Component} from 'react';

class ToDoList extends Component {

    render() {
        return (
            <ul>
                {
                    this.props.todoList.map((item, index) => {
                        return (
                            <li key={index}>{item.text}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ToDoList