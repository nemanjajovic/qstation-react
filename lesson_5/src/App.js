import { useState } from "react";
import PersonCounter from "./components/PersonCounter";
import Persons from "./components/Persons";

const App = () => {
  const [showPersonCount, setShowPersonCount] = useState(true);
  let personsCount
  if (showPersonCount) {
    personsCount = <PersonCounter count={3} />;
  } else {
    personsCount = <h2>Dont show persons</h2>;
  }
  return (
    <>
      <div className="App">
        Persons list
      </div>
      <button onClick={() => setShowPersonCount(prevState => { return !prevState })}>Show person count</button>
      {/* {showPersonCount ? <PersonCounter count={3}/> : <h2>Dont show counter</h2>} */}
      {/* {showPersonCount && <PersonCounter count={3}/>}
    {!showPersonCount && <h2>Dont show counter</h2>} */}
      {personsCount}
      <Persons />
    </>
  );
}


export default App;