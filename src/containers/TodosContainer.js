
import React, { Component } from 'react';
import TodoModel from '../models/Todo.js';
import Todos from '../components/Todos.js';
import CreateTodoForm from '../components/CreateTodoForm'

class TodosContainer extends Component {
   constructor(){
      super()
      this.state={
         todos: [],
         editingTodoId: null,
         editing: false
      }
     this.createTodo = this.createTodo.bind(this);
     this.deleteTodo = this.deleteTodo.bind(this);
     this.updateTodo = this.updateTodo.bind(this);
     this.editTodo = this.editTodo.bind(this);
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
          // API data
           name: todo
       }
       TodoModel.create(newTodo).then((res) => {
           let todos = this.state.todos
           let newTodos = todos.push(res.data)
           this.setState({newTodos})
       })
   }

   deleteTodo(todo) {
      TodoModel.delete(todo).then((res) => {
         let todos = this.state.todos.filter(function(todo) {
            return todo._id !== res.data._id
         });
         this.setState({todos})
      })
   }

   updateTodo(todoBody) {
      let todoId = this.state.editingTodoId
      function isUpdatedTodo(todo) {
         return todo._id === todoId;
      }
      TodoModel.update(todoId, todoBody).then((res) => {
         let todos = this.state.todos
         // name is from API
         todos.find(isUpdatedTodo).name = todoBody
         this.setState({
            todos: todos,
            editingTodoId: null,
            editing: false
         })
      })
   }

   editTodo(todo){
      this.setState ({
         editingTodoId: todo._id,
         editing: true
      })
   }

   render(){
     return (
       <div className="TodosContainer">
         <Todos
           todos={ this.state.todos }
           editingTodoId={ this.state.editingTodoId }
           onEditTodo={ this.editTodo }
           onUpdateTodo={ this.updateTodo }
           onDeleteTodo={ this.deleteTodo }
         />
         <CreateTodoForm
           createTodo={ this.createTodo }
         />
       </div>
     )
   }
}

export default TodosContainer;
