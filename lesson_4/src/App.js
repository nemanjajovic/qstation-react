import { useState } from 'react'
import PersonCounter from './components/PersonCounter'
import Persons from './components/Persons'

const INITIAL_ARRAY = [
  {
    id: 1,
    name: 'petar',
    surname: 'petrovic',
    age: 27,
  },
  {
    id: 2,
    name: 'marko',
    surname: 'markovic',
    age: 30,
  },
  {
    id: 3,
    name: 'jovan',
    surname: 'jovanovic',
    age: 56,
  },
]

const App = () => {
  const [persons, setPersons] = useState(INITIAL_ARRAY)
  const [showPersonCount, setShowPersonCount] = useState(true)
  let personsCount

  if (showPersonCount) {
    personsCount = <PersonCounter count={persons.length} />
  } else {
    personsCount = <h2>Dont show persons</h2>
  }

  return (
    <>
      <div className="App">Persons list</div>
      <button
        onClick={() =>
          setShowPersonCount((prevState) => {
            return !prevState
          })
        }
      >
        Show person count
      </button>
      {/* {showPersonCount ? <PersonCounter count={3}/> : <h2>Dont show counter</h2>} */}
      {/* {showPersonCount && <PersonCounter count={3}/>}
    {!showPersonCount && <h2>Dont show counter</h2>} */}
      {personsCount}
      <Persons onPersonsChanged={setPersons} persons={persons} />
    </>
  )
}

export default App
