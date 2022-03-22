import Person from './Person'
import NewPersonForm from './NewPersonForm'
import PersonCounter from './PersonCounter'
import { useState } from 'react'

const INITIAL_ARRAY = [
  {
    id: 1,
    name: 'petar',
    surname: 'petrovic',
    age: 27,
  },
  {
    id: 2,
    name: 'marko',
    surname: 'markovic',
    age: 30,
  },
  {
    id: 3,
    name: 'jovan',
    surname: 'jovanovic',
    age: 56,
  },
]
const Persons = () => {
  const [persons, setPersons] = useState(INITIAL_ARRAY)

  const addPersonHandler = (person) => {
    // console.log('Add person handler')
    console.log(person)
    setPersons((prevState) => {
      console.log(prevState)
      return [
        {
          ...person,
          id: prevState.length + 1,
        },
        ...persons,
      ]
    })
  }

  return (
    <>
      <PersonCounter />
      <NewPersonForm onAddPerson={addPersonHandler} />

      {persons.length >= 4 ? (
        persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            surname={person.surname}
            age={person.age}
          />
        ))
      ) : (
        <h2>Manje od 4 osobe</h2>
      )}
    </>
  )
}

export default Persons
