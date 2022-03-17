import React, { useState } from "react";

const NewPersonForm = ({ onAddPerson }) => {
  //   const [enteredName, setEnteredName] = useState("");
  //   const [enteredSurname, setEnteredSurname] = useState("");
  //   const [enteredAge, setEnteredAge] = useState("");

  const [person, setPerson] = useState({ name: "", surname: "", age: "" });
  const nameChangedHandler = (e) => {
    // setEnteredName(e.target.value);
    // setPerson({
    //   ...person,
    //   name: e.target.value,
    // });
    setPerson((prevState) => {
      return { ...prevState, name: e.target.value };
    });
    // console.log(person);
  };
  const surnameChangedHandler = (e) => {
    // setEnteredSurname(e.target.value);
    // setPerson({
    //   ...person,
    //   surname: e.target.value,
    // });
    setPerson((prevState) => {
      return {
        ...prevState,
        surname: e.target.value,
      };
    });
  };
  const ageChangedHandler = (e) => {
    // setEnteredAge(e.target.value);
    // setPerson({
    //   ...person,
    //   age: e.target.value,
    // });
    setPerson((prevState) => {
      return {
        ...prevState,
        age: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const newPerson = {
    //   name: enteredName,
    //   surname: enteredSurname,
    //   age: enteredAge,
    // };
    // setEnteredName("");
    // setEnteredSurname("");
    // setEnteredAge("");
    const newPerson = {
      name: person.name,
      surname: person.surname,
      age: person.age,
    };
    setPerson({ name: "", surname: "", age: "" });
    onAddPerson(newPerson);
    // console.log(newPerson);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Name</label>
      <input onChange={nameChangedHandler} value={person.name} />
      <label>Surname</label>
      <input onChange={surnameChangedHandler} value={person.surname} />
      <label>Age</label>
      <input onChange={ageChangedHandler} value={person.age} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPersonForm;
