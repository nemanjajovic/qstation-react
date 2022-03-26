import Counter from './Counter'

const CounterList = ({ counter, deleteCounterHandler }) => {
  return (
    <div>
      {counter.map((element) => (
        <Counter
          deleteCounterHandler={deleteCounterHandler}
          id={element.id}
          key={element.id}
          incrementStep={element.counters}
        />
      ))}
    </div>
  )
}

export default CounterList
