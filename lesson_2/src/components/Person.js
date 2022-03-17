import { useState } from "react";

const Person = ({ name, surname, age }) => {
  const [enteredName, setEnteredName] = useState(name);
  const buttonClickHandler = () => {
    setEnteredName("Izmjenjeno");
    console.log("Dugme kliknuto");
  };
  return (
    <>
      <h1>Person</h1>
      <p>{enteredName}</p>
      <p>{surname}</p>
      <p>{age}</p>
      <button onClick={buttonClickHandler}>Button</button>
    </>
  );
};

export default Person;
