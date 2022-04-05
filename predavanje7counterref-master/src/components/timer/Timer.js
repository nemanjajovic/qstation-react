import { useState, useEffect } from 'react'

const Timer = () => {
  const [currentTime, setCurrentTIme] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let id
    if (isRunning) {
      id = setInterval(() => {
        setCurrentTIme((prevState) => prevState + 1)
      }, 10)
    }
    return () => {
      if (id) {
        clearInterval(id)
      }
    }
  }, [isRunning])

  const toggleTimerHandler = () => {
    setIsRunning((prevState) => !prevState)
  }
  return (
    <div>
      <p>Time: {`${(currentTime / 100).toFixed(2)}s`}</p>
      <button onClick={toggleTimerHandler}>
        {isRunning ? 'stop' : 'start'}
      </button>
    </div>
  )
}

export default Timer
