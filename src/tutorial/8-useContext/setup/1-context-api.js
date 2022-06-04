import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

// two componenets - Provider(works as Distributer), Consumer


// Root component
const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson,people}}>
      <h3>COntext API / useCOntext</h3>
      {/* <List people={people} removePerson={removePerson} /> */}
      {/* <List people={people} /> */}
      <List />
    </PersonContext.Provider>
  );
};

// const List = ({ people, removePerson }) => {
const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            // removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
