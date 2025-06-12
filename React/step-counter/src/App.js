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


  return (
    <div>

    <h1 style={{marginLeft: "16px"}}>Step Counter App</h1>

    <h2 style={{marginLeft: "16px"}}>Current Count: {count}</h2>
    <h2 style={{marginLeft: "16px"}}>Step: 
      <input
      style={{marginLeft: "16px"}}
      value={stepText}
      onChange={(e) => setStepText(e.target.value)}
      placeholder="Enter Amount of steps here"
      ></input>
      <button onClick={addStep}>Add Step</button>

    <p>
      <button> + </button>
      <button style={{marginLeft: "16px"}}> - </button>
      <button style={{marginLeft: "16px"}}> reset </button>
    </p>
    </h2>
    
    </div>
  )
}

export default App;