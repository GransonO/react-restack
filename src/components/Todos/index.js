import React, { Component } from 'react';
import axios from 'axios';
import './index.css'

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
                    <div className="center">
                        <h3>{todo.id}</h3>
                        <p>{todo.title}</p>
                    </div>
                 )
             })
        )
    }
}

export default Todos;