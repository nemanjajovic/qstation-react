import Person from "./Person";

function Persons() {
  const persons = [
    {
      name: "Nemanja",
      surname: "Jovic",
      age: 27,
    },
    {
      name: "Petar",
      surname: "Petrovic",
      age: 25,
    },
    {
      name: "Marko",
      surname: "Markovic",
      age: 30,
    },
  ];
  return (
    <div>
      <Person
        name={persons[0].name}
        surname={persons[0].surname}
        age={persons[0].age}
      />
      <Person
        name={persons[1].name}
        surname={persons[1].surname}
        age={persons[1].age}
      />
      <Person
        name={persons[2].name}
        surname={persons[2].surname}
        age={persons[2].age}
      />
    </div>
  );
}

export default Persons;
