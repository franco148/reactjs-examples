import React, { Component } from 'react';

// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`

class App extends Component {

  // ? This only works in class based components
  state = {
    persons: [
      { id: 'pid1', name: 'Franco', age: 30 },
      { id: 'pid2', name: 'Fernando', age: 27 },
      { id: 'pid3', name: 'Mireya', age: 20 }
    ]
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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(({id, name, age}, index) => {
            // Key always has to be in the Boundary because this is now the
            // outer element which we map
            // Only use when it is really required.
            return <ErrorBoundary key={id}>
                    <Person
                      name={name}
                      age={age}
                      click={() => this.deletePersonHandler(index)}
                      changed={(event) => this.nameChangeHandler(event, id) } />
                    </ErrorBoundary>;
          })}
        </div>
      );
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        <StyledButton
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>

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
