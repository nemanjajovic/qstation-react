import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NewFruitForm = ({ onAddFruit }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // console.log(name, quantity)
    const newFruit = {
      key: uuid(),
      id: uuid(),
      name: name,
      quantity: quantity,
    }
    // console.log(newFruit)
    onAddFruit(newFruit)
    setName('')
    setQuantity('')
  }
  const addNameHandler = (e) => {
    setName(e.target.value)
    // console.log(e.target.value)
  }
  const addQuantityHandler = (e) => {
    setQuantity(e.target.value)
    // console.log(e.target.value)
  }
  return (
    <form onSubmit={onSubmitHandler} className="form-group">
      <label htmlFor="">Fruit</label>
      <input
        className="form-control"
        type="text"
        onChange={addNameHandler}
        value={name}
      />
      <label htmlFor="">Price</label>
      <input
        className="form-control"
        type="text"
        onChange={addQuantityHandler}
        value={quantity}
      />
      <button className="btn btn-primary" type="submit">
        Add Fruit
      </button>
    </form>
  )
}

export default NewFruitForm
