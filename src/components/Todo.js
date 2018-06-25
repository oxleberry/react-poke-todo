
import React, { Component } from 'react';

class Todo extends Component {
    render () {
        return (
            <p data-todos-index={this.props.todo._id}>
               <span>{this.props.todo.name}</span>
            </p>
        )
    }
}

export default Todo;
