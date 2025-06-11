import { useState } from "react";

function App(){

  const [expenses, setExpenses] = useState([]);

  const[textInput, setTextInput] = useState("");

  const[amountInput, setAmount] = useState("");

  const[categoryInput, setCategory] = useState("Food");

  const[filterCategory, setFilterCategory] = useState("All");

  const addExpense = () => {
    if(textInput.trim() === "" || amountInput.trim() === "") return;
    setExpenses([...expenses, {text:textInput, amount: parseFloat(amountInput), category: categoryInput}]);
    setTextInput("");
    setAmount("");
  };

  const total = 
    expenses.filter((expense) =>
    filterCategory === "All" ? true : expense.category === filterCategory
  ).reduce((sum, expense) => sum + expense.amount, 0);

  return(
    <div className="Expense List">

      <h1 style={{marginLeft:"8px"}}>Expense List</h1>
      <h2 style={{marginLeft:"8px"}}>Total: ${total.toFixed(2)} (Category: {filterCategory})</h2>
      <input
        value={textInput} onChange={(e) => setTextInput(e.target.value)}
        placeholder="Enter Expense Here:"
        style={{marginLeft:"8px"}}>
      </input>
      <input 
      type="number" 
      value={amountInput} 
      onChange={(e) => setAmount(e.target.value)} 
      placeholder="amount"
      style={{marginLeft:"8px"}}>
      </input>
      <select
      value={categoryInput}
      onChange={(e) => setCategory(e.target.value)}
      style={{marginLeft: "8px"}}>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <button onClick={addExpense}>
      Add Expense
      </button>
      <div style={{marginTop: "16px"}}>
        <label>Filter by Category: </label>
        <select
        value ={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All</option>
          <option value ="Food">Food</option>
          <option value ="Transport">Transport</option>
          <option value ="Entertainment">Entertainment</option>
        </select>
      </div>
      <ul>
        {expenses.filter((expense) => 
        filterCategory === "All" ? true : expense.category === filterCategory
      ).map((expense, index) => (
          <li key={index}>
          {expense.text} - ${expense.amount.toFixed(2)} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;