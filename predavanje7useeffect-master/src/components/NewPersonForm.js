import { useState, useRef } from "react";
import Modal from "./overlays/Modal"

const NewPersonForm = (props) => {
    const [modalMessage, setModalMessage] = useState("");
    const nameRef = useRef();
    const surnameRef = useRef();
    const ageRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (nameRef.current.value === "") {
            setModalMessage("Ime nije uneseno.")
        } else {
            const newPerson = {
                name: nameRef.current.value,
                age: ageRef.current.value,
                surname: surnameRef.current.value
            }
            props.onAddPerson(newPerson);
            // nova osoba je dodana
            setModalMessage("Nova osoba je dodana.");
            nameRef.current.value = "";
            surnameRef.current.value = "";
            ageRef.current.value = "";
        }
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
            {modalMessage !== "" && <Modal message={modalMessage} onClose={() => setModalMessage("")} />}
        </>
    )
}

export default NewPersonForm;