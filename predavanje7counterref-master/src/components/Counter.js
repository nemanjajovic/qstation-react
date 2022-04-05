import { useRef } from "react";

const Counter = (props) => {
    // const [counterValue, setCounterValue] = useState(0);
    const counterValue = useRef(0);

    const incrementOneHandler = () => {
        // setCounterValue(prevState => prevState + 1);
        counterValue.current = counterValue.current + 1;
        console.log(counterValue.current);
    }

    const incrementNHandler = () => {
        // setCounterValue(prevState => prevState + props.incrementStep);
        counterValue.current = counterValue.current + props.incrementStep;
        console.log(counterValue.current);
    }

    const updateDatabaseHandler = () => {
        console.log("Poziv servisa, vrijednost: ", counterValue.current);
    }

    return (
        <div>
            <h2>Counter</h2>
            {/* <div>{counterValue.current}</div> */}
            <button onClick={incrementOneHandler}>Increment 1</button>
            <button onClick={incrementNHandler}>{`Increment ${props.incrementStep}`}</button>
            <button onClick={updateDatabaseHandler}>Update in database</button>
        </div>
    );
}

export default Counter;