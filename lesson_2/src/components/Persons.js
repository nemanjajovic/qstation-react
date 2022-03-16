import Person from './Person'

function Persons() {
  const persons = [
    {
      key: 1,
      name: 'Nemanja',
      surname: 'Jovic',
      age: 27,
    },
    {
      key: 2,
      name: 'Petar',
      surname: 'Petrovic',
      age: 25,
    },
    {
      key: 3,
      name: 'Marko',
      surname: 'Markovic',
      age: 30,
    },
    {
      key: 4,
      name: 'Test',
      surname: 'Test',
      age: 'Tests',
    },
  ]

  return persons.map((person) => {
    return (
      <Person
        key={person.key}
        name={person.name}
        surname={person.surname}
        age={person.age}
      />
    )
  })
  // return (
  // <div>
  //   <Person
  //     name={persons[0].name}
  //     surname={persons[0].surname}
  //     age={persons[0].age}
  //   />
  //   <Person
  //     name={persons[1].name}
  //     surname={persons[1].surname}
  //     age={persons[1].age}
  //   />
  //   <Person
  //     name={persons[2].name}
  //     surname={persons[2].surname}
  //     age={persons[2].age}
  //   />
  // </div>
  // );
}

export default Persons
