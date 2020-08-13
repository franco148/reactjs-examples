import React from 'react';

import Person from './Person/Person';

// For an scenario to cleanup some stuff, first we will need a
// class based component. second implementing the componentWillUpdate hook.

const persons = ({ persons, clicked, changed}) => {
  console.log('[Persons.js] rendering...');
  return persons.map(({id, name, age}, index) => {
    return  <Person
              key={id}
              name={name}
              age={age}
              click={() => clicked(index)}
              changed={(event) => changed(event, id) } />
  })
};

export default persons;
