import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([]);

  const [taskText, setTaskText] = useState("");

  const [intervals, setIntervals] = useState({});

  const [filter, setFilter] = useState("All")

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

      <ul>
        {taskList.map((tasks, index) => (
          <li key={index}>
            {tasks.text} - {tasks.time}<button onClick={() => startTimer(index)} style={{ marginLeft: "16px" }}> Start </button> <button onClick={() => stopTimer(index)}>Stop</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;