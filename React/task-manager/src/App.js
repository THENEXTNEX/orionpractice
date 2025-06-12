import { useState } from 'react';
import './App.css';

function App() {

  const[tasks, setTasks] = useState([]);

  const[newTaskText, setTaskText] = useState("");

  const[amountText, setAmountText] = useState("");

  const[filter, setFilter] = useState("All");

  const[categorySelect, setCategorySelect] = useState("Personal");

  const[categoryFilter, setCategoryFilter] = useState("All");

  const completeTask = (index) => {
    const update = [...tasks]
    update[index].isDone = true;
    setTasks(update);
  }

  const addTask = () => {
    if(newTaskText.trim() === "" || 
      amountText.trim() === "" || 
      parseInt(amountText).isNaN) return;
    setTasks([...tasks, {text: newTaskText, amount: parseInt(amountText), category: categorySelect, isDone: false}]);
    setTaskText("");
    setAmountText("");
  }

  const total = tasks.filter((task) => 
    categoryFilter === "All" ? true : task.category === categoryFilter).filter((task) =>{
    if(filter === "All") return true;
    if(filter === "Completed") return task.isDone;
    if(filter === "Not Done") return !task.isDone;
    return false;}).reduce((sum, amount) => sum + amount.amount, 0);

  const isCompleted = tasks.filter(task => task.isDone).length
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
        style={{marginLeft:"4px"}}
        placeholder="Enter Amount here..."
        onChange={(e) => setAmountText(e.target.value)}>
        </input>
        <select
        onChange={(e) => setCategorySelect(e.target.value)}
        value={categorySelect}
        style={{marginLeft:"4px", marginRight: "16px"}}>
          <option value={"Personal"}>Personal</option>
          <option value={"School"}>School</option>
          <option value={"Travel"}>Travel</option>
          <option value={"Food"}>Food</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </h2>
      <h3>
        Running Total: ${total}.
      </h3>
      <h3>
         Select Task Filter 
        <select
        style={{marginLeft : "8px", marginRight: "8px"}}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}>
          <option value={"All"}>All</option>
          <option value={"Completed"}>Completed</option>
          <option value={"Not Done"}>Not Done</option>
        </select>
        <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value={"All"}>All</option>
          <option value={"Personal"}>Personal</option>
          <option value={"School"}>School</option>
          <option value={"Travel"}>Travel</option>
          <option value={"Food"}>Food</option>
        </select>
      </h3>
      <ul>
        {tasks.filter((task) => {
          if(filter === "All") return true;
          if(filter === "Completed") return task.isDone;
          if(filter === "Not Done") return !task.isDone;
          return false;
        }).filter((task) =>
        categoryFilter === "All" ? true : task.category === categoryFilter).map((task, index) => (
          <li key={index}>
            {task.text} - Cost: ${task.amount} - Category: {task.category}
            {!task.isDone ? <button onClick={()=>completeTask(index)} style={{marginLeft:"4px"}}>Complete Task</button> : <button style={{marginLeft:"4px"}}>Undo Completion</button>}        
          </li>
        ))}
      </ul>
      <h1>You have completed {isCompleted} out of {tasks.length} tasks!</h1>
    </div>
  );
}

export default App;
