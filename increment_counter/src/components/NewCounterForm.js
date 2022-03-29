import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const NewCounterForm = ({ newCounterHandler }) => {
  const [incrementStep, setIncrementStep] = useState(1)
  const incrementChangedHandler = (e) => {
    let increment = +e.target.value
    if (increment < 1) {
      console.log('number cannot be smaller than 1')
    } else {
      setIncrementStep(increment)
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    let newCounterObj = {
      counters: incrementStep,
      id: uuidv4(),
    }
    newCounterHandler(newCounterObj)
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={incrementChangedHandler}
        type="number"
        value={incrementStep}
      />
      <button type="submit">Add new counter</button>
    </form>
  )
}

export default NewCounterForm
