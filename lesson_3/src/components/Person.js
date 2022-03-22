import { useState } from 'react'

const Person = ({ name, surname, age }) => {
  const [enteredName, setEnteredName] = useState(name)
  const buttonClickHandler = () => {
    setEnteredName('Changed.')
    console.log('Button clicked.')
  }

  return (
    <div>
      <h1>Person</h1>
      <p>{enteredName}</p>
      <p>{surname}</p>
      <p>{age}</p>
      <button onClick={buttonClickHandler}>Promijeni ime</button>
    </div>
  )
}

export default Person
