import { useState } from 'react'
import CounterList from './components/counter/CounterList'
import NewCounterForm from './components/counter/NewCounterForm'
import TimerList from './components/timer/TimerList'

function App() {
  const [counterIncrements, setCounterIncrements] = useState([])

  const addCounterValueIncrement = (incrementStep) => {
    setCounterIncrements((prevState) => [...prevState, incrementStep])
  }

  return (
    <div>
      <NewCounterForm onAddCounterIncrement={addCounterValueIncrement} />
      <CounterList counterIncrements={counterIncrements} />
      <TimerList />
    </div>
  )
}

export default App
