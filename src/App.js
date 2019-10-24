import React from 'react';
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'; 
import './App.css';
import logo from './logo.svg';

import Home from './components/home/';
import AddPerson from './components/addPerson'
import { AnotherPage } from './components/anotherPage'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      people: [],
    }
  }

  showMyData = (name, age) => {
    this.setState({people: this.state.people.map((person) => {
        if(person.name === name){
          person={...person, isCalled: true}
        }
        return person;
      }
    )})
  };
  
  AddPersonToList = (name, age) => {
    let people = [...this.state.people, { name, age }]
    console.log("New state: ", people)
    this.setState({...this.state, people})
  }

  deletePerson = (name) => {
    let people = this.state.people
    people.map((person) => {
      if(person.name === name){
        people.splice(people.indexOf(person), 1)
      }
      return person
    })
    this.setState({...this.state.people, people})
  }

  populateList = () => {
    return [
      {
        name: "Ben",
        age: 20
      },
      {
        name: "Benson",
        age: 22
      },
      {
        name: "Benard",
        age: 25
      },
      {
        name: "Benjamin",
        age: 27
      },
      {
        name: "Benja",
        age: 29
      }
    ];
  }

  componentDidMount(){
    // Call HTTP requests from here
    axios.get('https://jsonplaceholder.typicode.com/todos').then((result) => {
      console.log("HTTP DATA IS : ", result.data)
    });
    let people = this.populateList();
    console.log("1. ==================> ", this.state)
    this.setState({...this.state, people})
  }

  render() {
    console.log("2. ==================> ", this.state)
    return (
      <BrowserRouter>
        <Route exact path="/" >
          <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <AddPerson addPersonToList={this.AddPersonToList}/>
            <Home allPeople={this.state.people} showMyData={this.showMyData.bind(this)}  deletePerson={this.deletePerson.bind(this)}/>
          </div>
        </Route>

        <Route exact path="/about">
          <AnotherPage />
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
