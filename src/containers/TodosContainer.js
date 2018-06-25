
import React, { Component } from 'react';
import TodoModel from '../models/Todo.js';
import Todos from '../components/Todos'

class TodosContainer extends Component {
   constructor(){
      super()
      this.state={
         todos: []
      }
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

    render () {
        return (
            <div className='todosContainer'>
                <h2>Catch Them All</h2>
                <Todos todos={this.state.todos} />
            </div>
        )
    }
}

export default TodosContainer;
