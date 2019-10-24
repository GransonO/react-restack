import React from 'react'
import PropTypes from 'prop-types'
import './index.css';

class Person extends React.Component{

    render(){
        const person = this.props.human;
        // const number = this.props.count;
        this.showMyData = this.props.showMyData
        this.deletePerson = this.props.deletePerson
        return (
            <div className="Home">
                <p> <strong> {person.name}  </strong> </p>
                <button onClick={this.showMyData.bind(this, person.name, person.age)}>Click to see {person.name} details </button>
                <br/>
                <button className="delete" onClick={this.deletePerson.bind(this, person.name)}>Click to delete {person.name} details </button>
            </div>
        );
    } 
}

Person.propTypes = {
    human: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    showMyData: PropTypes.func.isRequired,
    deletePerson: PropTypes.func.isRequired
    
}

export default Person;