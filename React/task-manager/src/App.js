import { useState } from 'react';
import './App.css';

function App() {

  const[tasks, setTasks] = useState([]);

  const[newTaskText, setTaskText] = useState("");

  const[amount, setAmount] = useState(0);

  const[amountText, setAmountText] = useState("");

  const addTask = () => {
    if(newTaskText.trim() === "" || amountText.trim() === "") return;
    setTasks([...tasks, {text: newTaskText, amount: parseInt(amountText)}]);
    setTaskText("");
  }

  return (
    <div style={{marginLeft: "16px"}}className="Task Manager">
      <h1>Task Manager</h1>
      <h2>
        Task:
        <input style={{marginLeft : "16px"}}
          value={newTaskText}
          placeholder="Enter new task here..."
          onChange={(e) => setTaskText(e.target.value)}>
        </input>
        <input 
        value={amountText}
        style={{marginLeft:"4px", marginRight: "16px"}}
        placeholder="Enter Amount here..."
        onChange={(e) => setAmountText(e.target.value)}>
        </input>
        <button onClick={addTask}>Add Task</button>
      </h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text} - Cost: ${task.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
