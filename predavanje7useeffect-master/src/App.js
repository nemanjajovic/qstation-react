import { useState, useEffect } from "react";
import { LoginForm } from "./components/login/LoginForm";
import PersonCounter from "./components/PersonCounter";
import Persons from "./components/Persons";

const App = () => {
  const [showPersonCount, setShowPersonCount] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isLoggedLS = localStorage.getItem("isLogged");
    if (isLoggedLS === "true") {
      setIsLogged(true);
    }
  }, []);

  let personsCount
  if (showPersonCount) {
    personsCount = <PersonCounter count={3} />;
  } else {
    personsCount = <h2>Dont show persons</h2>;
  }

  const loginHandler = () => {
    setIsLogged(true);
    localStorage.setItem("isLogged", true)
  }

  return (
    <>
      {isLogged ?
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
        : <LoginForm onLogin={loginHandler} />}
    </>
  );
}


export default App;