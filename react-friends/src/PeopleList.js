import React from 'react';
import people from './people'

const PeopleList = props => {
    return <div>Hello World!
    
    {props.people.map(person=> {
        return (
          <div key={person.first_name + person.last_name + person.email}>
            {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
            {person.first_name} {person.last_name} {person.email}
          </div>
        );
      })}
    
    </div>
}


export default PeopleList;


