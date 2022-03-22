import React from 'react'
import { useState } from 'react'
import Fruit from './Fruit'
import NewFruitForm from './NewFruitForm'

const FruitList = () => {
  const [fruits, setFruits] = useState([
    {
      key: '3213123',
      id: '1',
      name: 'Apple',
      quantity: 300,
    },
    {
      key: '43425435',
      id: '2',
      name: 'Banana',
      quantity: 230,
    },
    {
      key: '5458457485',
      id: '3',
      name: 'Kiwi',
      quantity: 55,
    },
  ])

  const onAddFruit = (fruit) => {
    setFruits([...fruits, fruit])
    // console.log(fruits)
  }
  const onRemoveFruit = (fruit) => {
    const filteredFruits = fruits.filter((element) => element.id !== fruit.id)
    setFruits(filteredFruits)
    // console.log(filteredFruits)
  }
  return (
    <div className="fruit-list">
      <NewFruitForm onAddFruit={onAddFruit} />
      {fruits.map((fruit) => {
        return (
          <Fruit
            onRemoveFruit={onRemoveFruit}
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            quantity={fruit.quantity}
          />
        )
      })}
    </div>
  )
}

export default FruitList
