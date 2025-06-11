import { useState } from "react";

function App(){

  const [expenses, setExpenses] = useState([]);

  const[textInput, setTextInput] = useState("");

  const[amountInput, setAmount] = useState("");

  const addExpense = () => {
    if(textInput.trim() === "" || amountInput.trim() === "") return;
    setExpenses([...expenses, {text:textInput, amount: parseFloat(amountInput)}]);
    setTextInput("");
    setAmount("");
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return(
    <div className="Expense List">

      <h1>Expense List</h1>
      <h2>Total: ${total.toFixed(2)}</h2>
      <input
        value={textInput} onChange={(e) => setTextInput(e.target.value)}
        placeholder="Enter Expense Here:">
      </input>
      <input 
      type="number" 
      value={amountInput} 
      onChange={(e) => setAmount(e.target.value)} 
      placeholder="amount">
      </input>
      <button onClick={addExpense}>
      Add Expense
      </button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
          {expense.text} - ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;