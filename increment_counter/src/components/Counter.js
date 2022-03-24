import { useState } from 'react'

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(0)
  const incrementOneHandler = () => {
    console.log('Increment one')
    setCounterValue((prevState) => prevState + 1)
  }
  const incrementNHandler = () => {
    console.log('Increment N')
    setCounterValue((prevState) => prevState + props.incrementStep)
  }
  return (
    <div>
      <h2>Counter</h2>
      <div>{counterValue}</div>
      <button onClick={incrementOneHandler}>Increment 1</button>
      <button
        onClick={incrementNHandler}
      >{`Increment ${props.incrementStep}`}</button>
      <button>Remove this counter</button>
    </div>
  )
}

export default Counter
