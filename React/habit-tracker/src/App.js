import { useState } from "react";

function App() {

  //Habit list
  const[habit, setHabit] = useState([]);

  //Habit Text
  const[habitText, setHabitText] = useState("");

  //Category
  const[category, setCategory] = useState("Health");
  //Adding the habit to the habit state
  const addHabit = () => {
    if(habitText.trim() === "")return;
    setHabit([...habit, {text: habitText, category: category, isDone: false}]);
    setHabitText("");
  };

  return (
    <div style={{marginLeft: "16px"}} className="Habit Tracker App">
      <h1>Habit Tracking App</h1>
      <h2>Enter Habit here:
        <input
        style={{marginLeft: "8px"}}
        value={habitText}
        placeholder="Enter Habit here..."
        onChange={(e) => setHabitText(e.target.value)}>
        </input>
        <select onChange={(e) => setCategory(e.target.value)} style={{marginLeft: "8px"}} value={category}>
          <option value={"Health"}>Health</option>
          <option value={"Productivity"}>Productivity</option>
          <option value={"Mindfulness"}>Mindfulness</option>
        </select>
        <button onClick={addHabit} style={{marginLeft: "8px"}}>Add Habit</button>
        </h2>
      <ul>
        {habit.map((habits, index) => (
          <li key={index}>
            Habit: {habits.text} - Type: {habits.category}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
