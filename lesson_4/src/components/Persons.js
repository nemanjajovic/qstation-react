import { useState } from 'react'
import Person from './Person'
import NewPersonForm from './NewPersonForm'

const Persons = (props) => {
  const addPersonHandler = (person) => {
    props.onPersonsChanged((prevState) => {
      return [
        {
          ...person,
          id: prevState.length + 1,
        },
        ...prevState,
      ]
    })
  }

  return (
    <>
      <NewPersonForm onAddPerson={addPersonHandler} />
      {props.persons.length > 3 ? (
        props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            surname={person.surname}
            age={person.age}
          />
        ))
      ) : (
        <h2>Manje od 4</h2>
      )}
    </>
  )
}

export default Persons
