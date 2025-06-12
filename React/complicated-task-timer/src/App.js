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
    //Create new list to change
    const newList = [...taskList];
    //Using the index given from the click, set isRunning to true
    newList[index].isRunning = true;
    //Pass the list back
    setTaskList(newList);

    //Setting an ID to handle each timer independantly
    const id = setInterval(() => {
      //A new copy of the taskList is made using the previous state
      setTaskList((prevList) => {
        const updated = [...prevList];
        //Finds the correct timer using index and adds 1 to the timer
        updated[index] = { ...updated[index], time: updated[index].time + 1 }
        //return the new array to update the state
        return updated;
      });
      //1000 = 1000ms = 1s so every second
    }, 1000);

    //save the id in the interval object to be stopped when needed
    setIntervals((prev) => ({ ...prev, [index]: id }));
  };

  const stopTimer = (index) => {
    //Stops setInterval loop
    clearInterval(intervals[index]);

    //Create new list and update isRunning to false based on the index, pass it back.
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