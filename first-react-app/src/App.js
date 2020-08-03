import React, { Component } from 'react';
import logo from './logo.svg';

// import Radium, { StyleRoot } from 'radium';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `

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
    // ! It is not a good practice this, because arrays are references
    // const persons = this.state.persons;
    // ! It would be better to have a copy of the array
    // const persons = this.state.persons.slice();
    // ! But in this case we will use ES6 feature
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    // Ahother approach to the previous one would be.
    // const person = Object.assign({}, this.state.persons[personIndex]);

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

    // * Radium approach
    // const style = {
    //   backgroundColor: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // The following work with Radium
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(({id, name, age}, index) => {
            return <Person
                    key={id}
                    name={name}
                    age={age}
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangeHandler(event, id) } />;
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Robert!')}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} >My Hobbies: Reading</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      );
      // * Radium approach
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'blue'
      // };
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
      // ? We need to wrap our component with StyleRoot for avoiding an eror when
      // ? using MediaQueries with Radium

      // ! Important: We can only have one root element in JSX code.
      // * Radium approach
      // <StyleRoot>
      //   <div className="App">
      //     <h1>Hi, I'm a React App</h1>
      //     <p className={classes.join(' ')}>This is really working!!!</p>
      //     {/* https://reactjs.org/docs/events.html#supported-events
      //         If we want to sent parameters to the eventHandler, we
      //         can do the following:

      //         Approach 1: this.switchNameHandler.bind(this, 'parameter')
      //         Approach 2: onClick={() => this.switchNameHandler('parameter')}
      //     */}
      //     <button
      //       style={style}
      //       onClick={this.togglePersonsHandler}>Toggle Persons</button>

      //     {persons}
      //   </div>
      // </StyleRoot>

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!!!</p>
        {/* <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
        {/* <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton> */}
        <button className="button"
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
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

// ? RADIUM(App): This is called a higher order component, at the end it is jus
// ? a component wrapping your component adding, kind of injection some extra
// ? functionality.
// export default Radium(App);

// * Styled-Components approach
export default App;
