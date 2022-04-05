import { useState } from 'react'
import Timer from './Timer'

let autoIncrement = 0

const TimerList = () => {
  const [timers, setTimers] = useState([])

  const addTimerHandler = () => {
    setTimers((prevState) => [...prevState, autoIncrement++])
  }
  //   console.log('Timers: ', timers)
  return (
    <div>
      <h1>Timers: </h1>
      <button onClick={addTimerHandler}>Add timer</button>
      {timers.map((timer) => (
        <Timer key={timer} />
      ))}
    </div>
  )
}

export default TimerList
