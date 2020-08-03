import React from 'react';

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

const cockpit = ({persons, togglePersonsHandler}) => {

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

export default cockpit;
