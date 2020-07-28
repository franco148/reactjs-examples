import React from 'react';

import Radium from 'radium';

import './Person.css';

// ES6 Approach - Functional Component
const person = ({ name, age, children, click, changed }) => {

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  // ! When using class-based components, props should be used as: this.props
  return (
    <div className="Person" style={style}>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>

      {/* For accessing to the childre props, it has an special property called: children */}
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Radium(person);
