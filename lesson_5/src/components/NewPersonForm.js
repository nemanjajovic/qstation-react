import { useState, useRef } from "react";
import Modal from "./overlays/Modal"

const NewPersonForm = (props) => {
    const [isModalShown, setIsModalShown] = useState(false);
    const nameRef = useRef();
    const surnameRef = useRef();
    const ageRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const newPerson = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            surname: surnameRef.current.value
        }
        props.onAddPerson(newPerson);
        setIsModalShown(true);
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input ref={nameRef} />
                <label>Surname</label>
                <input ref={surnameRef} />
                <label>Age</label>
                <input ref={ageRef} />
                <button type="submit">Add person</button>
            </form>
            {isModalShown && <Modal onClose={() => setIsModalShown(false)}/>}
        </>
    )
}

export default NewPersonForm;