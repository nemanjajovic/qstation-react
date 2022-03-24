import NewCounterForm from './components/NewCounterForm'
import CounterList from './components/CounterList'
import { useState } from 'react'

function App() {
  const [counters, setCounters] = useState([])
  const newCounterHandler = (incrementStep) => {
    setCounters((prevState) => [...prevState, incrementStep])
  }
  console.log(counters)
  return (
    <div className="App">
      <NewCounterForm newCounterHandler={newCounterHandler} />
      <CounterList counters={counters} />
    </div>
  )
}

export default App
