const Person = ({ name, surname, age }) => {
  return (
    <div className="person">
      <h2>Person</h2>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
    </div>
  )
}

export default Person
