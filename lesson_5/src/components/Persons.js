import { useState } from "react";
import Person from "./Person";
import NewPersonForm from "./NewPersonForm";

const INITIAL_ARRAY = [
  {
    id: 1,
    name: "petar",
    surname: "petrovic",
    age: 27
  },
  {
    id: 2,
    name: "marko",
    surname: "markovic",
    age: 30
  },
  {
    id: 3,
    name: "jovan",
    surname: "jovanovic",
    age: 56
  },
]

const Persons = () => {
  const [persons, setPersons] = useState(INITIAL_ARRAY);

  const addPersonHandler = (person) => {
    setPersons(prevState => {
      return [{
        ...person,
        id: prevState.length + 1
      }, ...prevState]
    });
  }

  return (
    <>
      <NewPersonForm onAddPerson={addPersonHandler} />
      {persons.length > 3 ? persons.map((person) => <Person key={person.id} name={person.name} surname={person.surname} age={person.age} />) : <h2>Manje od 4</h2>}
    </>
  );
}

export default Persons;