import React, { Component } from 'react'
import './index.css'

import PropTypes from 'prop-types'


class AddPerson extends Component {
    constructor(props){
        super(props)
        this.person = {}
        this.addPersonToList = this.props.addPersonToList;
    }

    handleNameChange = (e) => {
        this.person = {...this.person,
            name: e.target.value
        }
    }

    handleAgeChange = (e) => {
        this.person = {...this.person,
            age: e.target.value
        }
    }

    collectPersonsdata = () => {
        const {name, age} = this.person;
        if(name){
            this.addPersonToList(name, parseInt(age) )
        }else{
            alert("Nothing to post") 
        }
    }
    render(){
        return(
            <div className="container">
                <div className="center">
                    <br/>
                    <input type="text" placeholder="Enter Person's Name" onChange={this.handleNameChange.bind(this)}/>
                    <br/>
                    <br/>
                    <input type="number" placeholder="Enter Person's age" onChange={this.handleAgeChange.bind(this)}/>
                    <br/>
                    <br/>
                    <input type="submit" className="button" onClick={this.collectPersonsdata.bind(this)}/>
                </div>
            </div>
        );
    }
}

AddPerson.propType={
    addPersonToList: PropTypes.func.isRequired
}

export default AddPerson;