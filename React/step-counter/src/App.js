import { useState } from "react";

function App (){


  const[count, setCount] = useState(0);

  const[stepText, setStepText] = useState("");

  const addStep = () => {
    if(stepText.trim() === "") return;
    const parsed = parseInt(stepText);
    if(!isNaN(parsed)){
      setCount(prev => prev + parsed);
    }
    setStepText("");
  }

  const removeStep = () => {
    if(stepText.trim() === "") return;
    const parsed = parseInt(stepText);
    if(!isNaN(parsed)){
      setCount(prev => prev - parsed);
    }
    setStepText("");
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <div>

    <h1 style={{marginLeft: "16px"}}>Step Counter App</h1>

    <h2 style={{marginLeft: "16px"}}>Current Count: {count}</h2>
    <h2 style={{marginLeft: "16px"}}>This number is {count % 2 === 0 ? "Even" : "Odd"}</h2>
    <h2 style={{marginLeft: "16px"}}>Step: 
      <input
      style={{marginLeft: "16px"}}
      value={stepText}
      onChange={(e) => setStepText(e.target.value)}
      placeholder="Enter Amount of steps here"
      ></input>
    <p>
      <button onClick={addStep}> + </button>
      <button onClick={removeStep} style={{marginLeft: "16px"}}> - </button>
      <button onClick={reset} style={{marginLeft: "16px"}}> reset </button>
    </p>
    </h2>
    
    </div>
  )
}

export default App;