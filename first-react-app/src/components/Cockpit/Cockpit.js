// useEffect is the second most important React hook you can use next to useState. Because
// useEffect basically combines the functionality or the use cases you can cover of all these
// class-based lifecycle hooks in one React hook, here and both is called hook. (This is not a lifecycle)
import React, { useEffect } from 'react';

import styled from 'styled-components';

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

const Cockpit = ({persons, togglePersonsHandler}) => {

  useEffect(() => {
    // componentDidMount, componentDidUpdate combined in one effect?
    console.log('[Cockpit.js] useEffect');
  });

  const classes = [];
  if (persons.length <= 2) {
    classes.push('red'); // ['red']
  }

  if (persons.length <= 1) {
    classes.push('bold'); // ['red', 'bold']
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!!!</p>
      <StyledButton
        onClick={togglePersonsHandler}>Toggle Persons
      </StyledButton>
    </div>
  );
};

export default Cockpit;
