import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);

  const [taskText, setTaskText] = useState("");

  const [intervals, setIntervals] = useState({});

  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTaskList([...taskList, { text: taskText, time: 0, isRunning: false }]);
    setTaskText("");
  }

  const startTimer = (index) => {
    if (taskList[index].isRunning) return; // Already running

    const newList = [...taskList];
    newList[index].isRunning = true;
    setTaskList(newList);

    const id = setInterval(() => {
      setTaskList((prevList) => {
        const updated = [...prevList];
        updated[index] = { ...updated[index], time: updated[index].time + 1 }
        return updated;
      });
    }, 1000);

    setIntervals((prev) => ({ ...prev, [index]: id }));
  };

  const stopTimer = (index) => {
    clearInterval(intervals[index]);

    const newList = [...taskList];
    newList[index].isRunning = false;
    setTaskList(newList);
  };

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds/60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2,'0');
    return `${minutes}:${seconds}`;
  }
  return (
    <div style={{ marginLeft: "16px" }}>
      <h1>Task Timers</h1>

      <h2>Task:
        <input
          value={taskText}
          style={{ marginLeft: "16px", marginRight: "16px" }}
          placeholder="Enter New Task Here"
          onChange={(e) => setTaskText(e.target.value)}>
        </input>
        <button onClick={addTask}>Add Task</button>
      </h2>
      <h3>Select Filter: 
        <select
        onChange={(e) => setFilter(e.target.value)} 
        value={filter}
        style={{ marginLeft: "8px" }}>
          <option value={"All"}>All</option>
          <option value={"Running"}>Running</option>
          <option value={"Stopped"}>Stopped</option>
        </select>
      </h3>
      <ul>
        {taskList.filter((task) => {
          if(filter === "All") return true;
          if(filter === "Running") return task.isRunning;
          if(filter === "Stopped") return !task.isRunning;
        }).map((tasks, index) => (
          <li key={index}>
            {tasks.text} - {formatTime(tasks.time)}<button onClick={() => startTimer(index)} style={{ marginLeft: "16px" }}> Start </button> <button onClick={() => stopTimer(index)}>Stop</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;