
import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    render () {
      let todos = this.props.todos.map((todo, idx) => {
         return (
            <Todo
               todo={todo}
               key={idx}
            />
         )
      })
      return (
         <div className="todos">
            {todos}
         </div>
      )
    }
}

export default Todos;
