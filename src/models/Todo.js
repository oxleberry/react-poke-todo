
import axios from 'axios';

class TodoModel {
   static all(){
      let request = axios.get("http://super-crud-api.herokuapp.com/api/pokemon")
      return request
   }
}

export default TodoModel
