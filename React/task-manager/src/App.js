import { useState } from 'react';
import './App.css';

function App() {

  const[tasks, setTasks] = useState([]);

  const[newTaskText, setTaskText] = useState("");

  const addTask = () => {
    if(newTaskText.trim() === "") return;
    setTasks([...tasks, {text: newTaskText}]);
    setTaskText("");
  }

  return (
    <div style={{marginLeft: "16px"}}className="Task Manager">
      <h1>Task Manager</h1>
      <h2>
        Task:
        <input style={{marginLeft : "16px", marginRight: "16px"}}
          value={newTaskText}
          placeholder="Enter new task here..."
          onChange={(e) => setTaskText(e.target.value)}>
        </input>

        <button onClick={addTask}>Add Task</button>
      </h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
