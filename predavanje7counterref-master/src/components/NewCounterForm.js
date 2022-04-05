import { useState } from "react";

const NewCounterForm = (props) => {
    const [incrementStep, setIncrementStep] = useState(1);

    const incrementChangeHandler = (e) => {
        setIncrementStep(+e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddCounterIncrement(incrementStep);
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={incrementChangeHandler} value={incrementStep} />
            <button type="submit">Add new counter</button>
        </form>
    )
}

export default NewCounterForm;