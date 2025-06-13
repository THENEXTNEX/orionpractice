import { useState } from "react";

function App() {

  //Habit list
  const[habit, setHabit] = useState([]);

  //Habit Text
  const[habitText, setHabitText] = useState("");

  //Category
  const[category, setCategory] = useState("Health");

  //Category Filter
  const[categoryFilter, setCategoryFilter] = useState("All");
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
  //Delete habit off list
  const deleteHabit = (id) => {
    setHabit(habit.filter(h => h.id !== id));
  }
  //Delete all items which are complete
  const deleteAllCompleted = () => {
    setHabit(habit.filter(h => !h.isDone))
  }
  //Helper completion filter function
  const checkCompletionFilter = (habit) => {
    if(completeFilter === "All") return true;
    if(completeFilter === "Completed") return habit.isDone;
    if(completeFilter === "Not Completed") return !habit.isDone;
  }
  //Helper category filter function
  const checkCategoryFilter = (habit) => {
    return categoryFilter === "All" ? true : habit.category === categoryFilter;
  }
  //Count how many items have been completed
  const countCompleted = habit.filter((habit) => habit.isDone).filter((habits) => 
    checkCategoryFilter(habits)).filter((habits) => 
    checkCompletionFilter(habits)).reduce((sum, habit) => sum + habit.isDone, 0);
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
        <h2>You have completed {countCompleted} tasks out of {habit.length}!</h2>
        <h2>Selection Completion Filter: 
          <select //Completion filter box
          onChange={(e) => setCompleteFilter(e.target.value)} style={{marginLeft : "16px"}}
          value={completeFilter}>
            <option value={"All"}>All</option>
            <option value={"Completed"}>Completed</option>
            <option value={"Not Completed"}>Not Completed</option>
          </select>
          <select //Category filter
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{marginLeft : "16px"}}>
            <option value={"All"}>All</option>
            <option value={"Health"}>Health</option>
            <option value={"Productivity"}>Productivity</option>
            <option value={"Mindfulness"}>Mindfulness</option>
          </select>
        </h2>
      <ul //Habit List generation
      >
        {habit.filter((habits) => {
          return checkCompletionFilter(habits)
        }).filter((habits) => {
          return checkCategoryFilter(habits)
        }).map((habits) => (
          <li key={habits.id}
          style={{textDecoration: habits.isDone ? "line-through" : "none"}}>
            Habit: {habits.text} - Type: {habits.category}
            {!habits.isDone ? //Completion button with changing of button
            <button onClick={()=> updateIsDone(habits.id)} style={{marginLeft: "8px"}}>Complete Habit</button>
            :<button onClick={()=> updateIsDone(habits.id)} style={{marginLeft: "8px"}}>Undo</button>
            }
            <button //Delete individual list item
            onClick={()=> deleteHabit(habits.id)} style={{marginLeft: "4px"}}>Delete</button>
          </li>
        ))}
      </ul>
        <button //Delete all completed
        onClick={() => deleteAllCompleted()}>DELETE ALL COMPLETED</button>
    </div>
  );
}

export default App;
