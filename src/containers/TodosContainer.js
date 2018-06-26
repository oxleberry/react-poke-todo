
import React, { Component } from 'react';
import TodoModel from '../models/Todo.js';
import Todos from '../components/Todos.js';
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
   constructor(){
      super()
      this.state={
         todos: []
      }
     this.createTodo = this.createTodo.bind(this);
   }

   componentDidMount(){
      this.fetchData()
   }

   fetchData(){
      TodoModel.all().then((res) => {
         console.log(res);
         this.setState ({
            todos: res.data.pokemons,
            todo: ''
         })
      })
   }
   createTodo(todo) {
       let newTodo = {
           name: todo
       }
       TodoModel.create(newTodo).then((res) => {
           let todos = this.state.todos
           let newTodos = todos.push(res.data)
           this.setState({newTodos})
       })
   }
   render(){
     return (
       <div className="todosComponent">
         <Todos
           todos={this.state.todos} />
         <CreateTodoForm
           createTodo={ this.createTodo }
           />
       </div>
     )
   }
}

export default TodosContainer;
