import React from 'react';

// ES6 Approach - Functional Component
const person = ({ name, age, children, click }) => {
  // ! When using class-based components, props should be used as: this.props
  return (
    <div>
      <p onClick={click}>I'm a {name} and I am {age} years old!</p>

      {/* For accessing to the childre props, it has an special property called: children */}
      <p>{children}</p>
    </div>
  );
};

export default person;
