
import React, { Component } from 'react';

class Todo extends Component {
   constructor() {
      super();
      this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
   }
   deleteClickedTodo() {
      this.props.onDeleteTodo(this.props.todo);
   }
   render () {
      return (
         <p data-todos-index={this.props.todo.id}>
            <span>{this.props.todo.name}</span>
            <span className='deleteButton' onClick={this.deleteClickedTodo}>
               (X)
            </span>
         </p>
      )
   }
}

export default Todo;
