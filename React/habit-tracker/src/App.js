import { useState } from "react";

function App() {

  //Habit list
  const[habit, setHabit] = useState([]);

  //Habit Text
  const[habitText, setHabitText] = useState("");

  //Category
  const[category, setCategory] = useState("Health");

  //Completion Filter
  const[completeFilter, setCompleteFilter] = useState("All");

  //Adding the habit to the habit state
  const addHabit = () => {
    if(habitText.trim() === "")return;
    setHabit([...habit, {id: Date.now(), text: habitText, category: category, isDone: false}]);
    setHabitText("");
  };
  //Update item to done
  const updateIsDone = (id) => {
    const update = habit.map((h) =>
    h.id === id ? {...h, isDone: !h.isDone} : h);
    setHabit(update);
  }

  //Helper filter function
  const checkFilter = (habit) => {
    if(completeFilter === "All") return true;
    if(completeFilter === "Completed") return habit.isDone;
    if(completeFilter === "Not Completed") return !habit.isDone;
  }
  return (
    <div style={{marginLeft: "16px"}} className="Habit Tracker App">
      <h1>Habit Tracking App</h1>
      <h2>Enter Habit here:
        <input //Habit Text box
        style={{marginLeft: "8px"}}
        value={habitText}
        placeholder="Enter Habit here..."
        onChange={(e) => setHabitText(e.target.value)}>
        </input>
        <select //Category drop box
        onChange={(e) => setCategory(e.target.value)} style={{marginLeft: "8px"}} value={category}>
          <option value={"Health"}>Health</option>
          <option value={"Productivity"}>Productivity</option>
          <option value={"Mindfulness"}>Mindfulness</option>
        </select>
        <button onClick={addHabit} style={{marginLeft: "8px"}}>Add Habit</button>
        </h2>
        <h2>Selection Completion Filter: 
          <select //Completion filter box
          onChange={(e) => setCompleteFilter(e.target.value)} style={{marginLeft : "16px"}}
          value={completeFilter}>
            <option value={"All"}>All</option>
            <option value={"Completed"}>Completed</option>
            <option value={"Not Completed"}>Not Completed</option>
          </select>
        </h2>
      <ul //Habit List generation
      >
        {habit.filter((habits) => {
          return checkFilter(habits)
        }).map((habits) => (
          <li key={habits.id}
          style={{textDecoration: habits.isDone ? "line-through" : "none"}}>
            Habit: {habits.text} - Type: {habits.category}
            {!habits.isDone ? //Completion button with changing of button
            <button onClick={()=> updateIsDone(habits.id)} style={{marginLeft: "8px"}}>Complete Habit</button>
            :<button onClick={()=> updateIsDone(habits.id)} style={{marginLeft: "8px"}}>Undo</button>
            }
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
