import React, {Component} from 'react';
import './home.css';
import PropTypes from 'prop-types'

import Person from '../Person'

class Home extends Component {
  render() {
    const people = this.props.allPeople;
    this.showMyData = this.props.showMyData;
    this.deletePerson = this.props.deletePerson;
    return people.map((person) => {
      let theKey =  people.indexOf(person) + 1;
      return (
        <Person
          key={theKey}
          count={theKey}
          human={person}
          showMyData={this.showMyData} 
          deletePerson={this.deletePerson.bind(this)}
        />
      );
    })
  }
}
Home.propTypes = {
  allPeople: PropTypes.array.isRequired,
  showMyData: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired,
}
export default Home;
