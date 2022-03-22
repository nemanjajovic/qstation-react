import Persons from './components/Persons'
import PersonCounter from './components/PersonCounter'
import { useState } from 'react'

const App = () => {
  const [showPersonCount, setShowPersonCount] = useState(true)

  return (
    <>
      <div className="App">Persons list</div>
      <button onClick={() => setShowPersonCount((prevState) => !prevState)}>
        Show person count
      </button>

      {showPersonCount && <PersonCounter count={3} />}
      <Persons />
    </>
  )
}

export default App
