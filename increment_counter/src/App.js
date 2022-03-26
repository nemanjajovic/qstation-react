import NewCounterForm from './components/NewCounterForm'
import CounterList from './components/CounterList'
import { useState } from 'react'

function App() {
  const [counters, setCounters] = useState([])
  const newCounterHandler = (incrementStep) => {
    setCounters((prevState) => [...prevState, incrementStep])
  }
  const deleteCounterHandler = (counter) => {
    const filteredCounters = counters.filter(
      (element) => element.id !== counter,
    )
    setCounters(filteredCounters)
  }
  return (
    <div className="App">
      <NewCounterForm newCounterHandler={newCounterHandler} />
      <CounterList
        deleteCounterHandler={deleteCounterHandler}
        counter={counters}
      />
    </div>
  )
}

export default App
