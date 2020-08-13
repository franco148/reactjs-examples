import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  // ? This only works in class based components
  state = {
    persons: [
      { id: 'pid1', name: 'Franco', age: 30 },
      { id: 'pid2', name: 'Fernando', age: 27 },
      { id: 'pid3', name: 'Mireya', age: 20 }
    ]
  }

  constructor(props) {
    super(props);
    console.log(props);

    // In constructor we can also initialize the State of the component.
    // But at the end, previous approach follows this steps... (contructor steps)
    // this.state = {
    //   persons: [
    //     { id: 'pid1', name: 'Franco', age: 30 },
    //     { id: 'pid2', name: 'Fernando', age: 27 },
    //     { id: 'pid3', name: 'Mireya', age: 20 }
    //   ]
    // };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   // It says unsafe!
  //   // It can be used if you just want to set some initial state based on props,
  //   // use the constructor!
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // this.state.persons[0].name = 'Franco Fral'; // this does not work
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Fernando', age: 27 },
        { name: 'Mireya', age: 19 }
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      );
    }



    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          togglePersonsHandler={this.togglePersonsHandler} />

        {persons}
      </div>
    );
  }

  // render() {
    // ? React will interprete by default h1 as a string
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App');
    // ? So If we would need to create another html/react element, we would need to do the following
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  // }
}

// * Styled-Components approach
export default App;
