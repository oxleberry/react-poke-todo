
import axios from 'axios';

class TodoModel {
   static all(){
      let request = axios.get("http://super-crud-api.herokuapp.com/api/pokemon")
      return request
   }
   static create(todo) {
      console.log(todo);
      let request = axios.post("http://super-crud-api.herokuapp.com/api/pokemon", todo)
      return request
   }
   static delete(todo) {
      let request = axios.delete(`http://super-crud-api.herokuapp.com/api/pokemon/${todo._id}`)
      return request
   }
}

export default TodoModel
