import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Person from './Person/Person';

class App extends Component {

  // ? This only works in class based components
  state = {
    persons: [
      { name: 'Franco', age: 30 },
      { name: 'Fernando', age: 27 },
      { name: 'Mireya', age: 20 }
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'TwoWay Binding', age: 30 },
        { name: event.target.value, age: 27 },
        { name: 'Mireya', age: 18 }
      ]
    });
  }

  render() {
    return (
      // ! Important: We can only have one root element in JSX code.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* https://reactjs.org/docs/events.html#supported-events
            If we want to sent parameters to the eventHandler, we
            can do the following:

            Approach 1: this.switchNameHandler.bind(this, 'parameter')
            Approach 2: onClick={() => this.switchNameHandler('parameter')}
        */}
        <button onClick={this.switchNameHandler.bind(this, 'Franco Robert')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Robert!')}
          changed={this.nameChangeHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} >My Hobbies: Reading</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
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

export default App;
