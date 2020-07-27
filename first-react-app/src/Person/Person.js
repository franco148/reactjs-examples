import React from 'react';

// ES6 Approach - Functional Component
const person = ({ name, age, children, click, changed }) => {
  // ! When using class-based components, props should be used as: this.props
  return (
    <div>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>

      {/* For accessing to the childre props, it has an special property called: children */}
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
