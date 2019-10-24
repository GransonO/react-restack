import React, { Component } from 'react';
import { TodoElement } from './todoElement'
import axios from 'axios';

class Todos extends Component{
    state = {
        todos: []
      }

    componentDidMount = () => {
        // Should be moved to actions later
        axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
          let todos = result.data 
          this.setState({...this.state, todos})
          console.log("The new state is : ", this.state)
        });
      } 

    render(){
        return(
             this.state.todos.map((todo) => {
                 return (
                    <TodoElement key={todo.id} todo={todo}/>
                 )
             })
        )
    }
}

export default Todos;