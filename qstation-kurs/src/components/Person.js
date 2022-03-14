const Person = ({name, surname, age}) => {
  return (
    <div className="">
      <h1>Person</h1>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
    </div>
  );
};

export default Person;
