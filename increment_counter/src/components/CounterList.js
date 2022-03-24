import Counter from './Counter'

const CounterList = (props) => {
  return (
    <div>
      {props.counters.map((counter) => (
        <Counter incrementStep={counter} />
      ))}
    </div>
  )
}

export default CounterList
