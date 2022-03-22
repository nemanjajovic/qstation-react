import { useState } from "react";

const NewPersonForm = (props) => {
    // const [enteredName, setEnteredName] = useState("");
    // const [enteredSurname, setEnteredSurname] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");

    // const nameChangeHandler = (event) => {
    //     setEnteredName(event.target.value);
    // }

    // const surnameChangeHandler = (event) => {
    //     setEnteredSurname(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     const newPerson = {
    //         name: enteredName,
    //         age: enteredAge,
    //         surname: enteredSurname
    //     }
    //     setEnteredName("");
    //     setEnteredAge("");
    //     setEnteredSurname("");
    //     console.log(newPerson);
    // }

    // return (
    //     <form onSubmit={submitHandler}>
    //         <label>Name</label>
    //         <input onChange={nameChangeHandler} value={enteredName} />
    //         <label>Surname</label>
    //         <input onChange={surnameChangeHandler} value={enteredSurname} />
    //         <label>Age</label>
    //         <input onChange={ageChangeHandler} value={enteredAge} />
    //         <button type="submit">Add person</button>
    //     </form>
    // )


    const [person, setPerson] = useState({ name: "", age: "", surname: "" });

    const nameChangeHandler = (event) => {
        setPerson({
            ...person,
            name: event.target.value,
        });
    }

    const surnameChangeHandler = (event) => {
        setPerson({
            ...person,
            surname: event.target.value,
        });
    }

    const ageChangeHandler = (event) => {
        setPerson({
            ...person,
            age: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newPerson = {
            name: person.name,
            age: person.age,
            surname: person.surname
        }
        props.onAddPerson(newPerson);
        setPerson({
            age: "",
            name: "",
            surname: ""
        });
    }


    return (
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input onChange={nameChangeHandler} value={person.name} />
            <label>Surname</label>
            <input onChange={surnameChangeHandler} value={person.surname} />
            <label>Age</label>
            <input onChange={ageChangeHandler} value={person.age} />
            <button type="submit">Add person</button>
        </form>
    )
}

export default NewPersonForm;