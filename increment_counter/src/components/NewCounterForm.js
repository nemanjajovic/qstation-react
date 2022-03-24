import { useState } from 'react'

const NewCounterForm = ({ newCounterHandler }) => {
  const [incrementStep, setIncrementStep] = useState(1)
  const incrementChangedHandler = (e) => {
    setIncrementStep(+e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(incrementStep)
    newCounterHandler(incrementStep)
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
