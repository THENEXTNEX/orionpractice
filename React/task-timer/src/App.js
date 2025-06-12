import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [intervals, setIntervals] = useState({}); // Track interval IDs by task index

  const addTask = () => {
    if (taskText.trim() === "") return;
    setTaskList([...taskList, { name: taskText, time: 0, isRunning: false }]);
    setTaskText("");
  };

  const startTimer = (index) => {
    if (taskList[index].isRunning) return; // Already running

    const newList = [...taskList];
    newList[index].isRunning = true;
    setTaskList(newList);

    const id = setInterval(() => {
      setTaskList((prevList) => {
        const updated = [...prevList];
        updated[index] = {...updated[index], time: updated[index].time + 1}
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

  const timerTotal = taskList.reduce((sum, time) => sum + time.time, 0);
  return (
    <div>
      <h1>Task Timer</h1>

      <input
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter Task here"
      />
      <button onClick={addTask}>Add Task</button>
      <h2>Running Timer Total: {timerTotal}</h2>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            {task.name} — {task.time}s
            <button onClick={() => startTimer(index)} style={{ marginLeft: "16px" }}>
              Start
            </button>
            <button onClick={() => stopTimer(index)} style={{ marginLeft: "8px" }}>
              Stop
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
