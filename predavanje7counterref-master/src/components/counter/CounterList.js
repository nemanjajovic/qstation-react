import Counter from "./Counter";
const CounterList = (props) => {
    return (
        <>
            {props.counterIncrements.map(incrementValue => <Counter incrementStep={incrementValue} />)}
        </>
    )
}

export default CounterList;