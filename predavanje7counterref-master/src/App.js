import { useState } from "react";
import CounterList from "./components/CounterList";
import NewCounterForm from "./components/NewCounterForm";

function App() {
  const [counterIncrements, setCounterIncrements] = useState([]);

  const addCounterValueIncrement = (incrementStep) => {
    setCounterIncrements(prevState => [...prevState, incrementStep]);
  }

  return (
    <div>
      <NewCounterForm onAddCounterIncrement={addCounterValueIncrement} />
      <CounterList counterIncrements={counterIncrements} />
    </div>
  );
}

export default App;
