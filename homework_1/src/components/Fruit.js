import React from 'react'

const Fruit = ({ onRemoveFruit, id, name, quantity }) => {
  // const [removedFruit, setRemovedFruit] = useState([])
  const removeFruitHandler = () => {
    // console.log(`Clicked ${id}`)
    const removedFruitObject = {
      id: id,
      name: name,
      quantity: quantity,
    }
    onRemoveFruit(removedFruitObject)
    // console.log(removedFruitObject)
  }
  return (
    <div className="fruit card px-10 py-5">
      {/* <h2>Fruit</h2> */}
      <p className="card-text">Fruit: {name}</p>
      <p className="card-text">Price: {quantity}</p>
      <button className="btn btn-danger" onClick={removeFruitHandler}>
        Remove
      </button>
    </div>
  )
}

export default Fruit
