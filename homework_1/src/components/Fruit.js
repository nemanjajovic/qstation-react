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
    <div>
      <h2>Fruit</h2>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={removeFruitHandler}>Remove</button>
    </div>
  )
}

export default Fruit
