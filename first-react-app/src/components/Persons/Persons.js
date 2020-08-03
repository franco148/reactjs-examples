import React from 'react';

import Person from './Person/Person';

const persons = ({ persons, clicked, changed}) => (
  persons.map(({id, name, age}, index) => {
    return  <Person
              key={id}
              name={name}
              age={age}
              click={() => clicked(index)}
              changed={(event) => changed(event, id) } />
  })
);

export default persons;
