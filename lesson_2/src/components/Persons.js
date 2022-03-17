import Person from "./Person";
import NewPersonForm from "./NewPersonForm";

const Persons = () => {
  const persons = [
    {
      name: "petar",
      surname: "petrovic",
      age: 27,
    },
    {
      name: "marko",
      surname: "markovic",
      age: 30,
    },
    {
      name: "jovan",
      surname: "jovanovic",
      age: 56,
    },
  ];

  const addPersonHandler = (newPerson) => {
    console.log(newPerson);
  };
  return (
    <>
      <NewPersonForm onAddPerson={addPersonHandler} />
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
    </>
  );
};

export default Persons;
