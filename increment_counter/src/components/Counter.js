import { useState } from 'react'

const Counter = ({ incrementStep, id, deleteCounterHandler }) => {
  const [counterValue, setCounterValue] = useState(0)
  const incrementOneHandler = () => {
    setCounterValue((prevState) => prevState + 1)
  }
  const incrementNHandler = () => {
    setCounterValue((prevState) => prevState + incrementStep)
  }
  const removeHandler = () => {
    deleteCounterHandler(id)
  }
  return (
    <div>
      <h2>Counter</h2>
      <div>{counterValue}</div>
      <button onClick={incrementOneHandler}>Increment 1</button>
      <button
        onClick={incrementNHandler}
      >{`Increment ${incrementStep}`}</button>
      <button onClick={removeHandler}>Remove this counter</button>
    </div>
  )
}

export default Counter
