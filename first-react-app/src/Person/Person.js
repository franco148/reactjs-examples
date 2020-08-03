import React from 'react';

// import Radium from 'radium';
import styled from 'styled-components';

import './Person.css';

const StyledDiv = styled.div `
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media(min-width: 500px) {
    width: 450px;
  }
`

// ES6 Approach - Functional Component
const person = ({ name, age, children, click, changed }) => {

  // * Radium approach
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  // ! When using class-based components, props should be used as: this.props
  return (
    // * Radium approach
    // <div className="Person" style={style}>

    // * Styled-Components approach
    <StyledDiv>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>

      {/* For accessing to the childre props, it has an special property called: children */}
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </StyledDiv>
  );
};

// * Radium approach
// export default Radium(person);

// * Styled-Component approach
export default person;
