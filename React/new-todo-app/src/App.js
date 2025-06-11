import{ useState } from "react";

//Functional component
function App(){

  //const [CURRENT STATE, HOW TO CHANGE] = useState (initialisation) this case empty array
  const [todos, setTodos] = useState([]);
  //const [CURRENT STATE, HOW TO CHANGE] = useState (initialisation) this case empty string
  const [input, setInput] = useState("");


  const addTodo = () => {
    //trims white space so no empty todos
    if (input.trim() === "") return;
    //[...] => add onto original array =>[...todos, input] => current state of previous array plus todos
    //changed by "input"
    setTodos([...todos, {text: input, done: false}]);
    //Clears box
    setInput("");
  }
  //Takes the index from indexToDelete
  const deleteToDo = (indexToDelete) => {
      setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  //Takes indexToToggle as input (from user clicking the button) then loops through
  //everything in the todo array and checks if the index exactly equals (===) the indexToToggle
  //If so, recreates the list with the done pointer flipped. Otherwise do nothing.
  const toggleDone = (indexToToggle) => {
    setTodos(
      todos.map((todo, index) => 
      index === indexToToggle ? {...todo, done: !todo.done} : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const remaining = todos.filter((todo) => !todo.done).length;


  //Every React component MUST return JSX (Javascript HTML)
  return(
    //Container
    <div className="App">
     
      <h1>Todo List</h1>
      
      <input 
        value={input} //value from the React state
        onChange={(e)=> setInput(e.target.value)} //Listens for user typing and updates using setInput
        //placeholder adds the faded text into the box
        placeholder="Add a todo"> 
      </input>
      
      <button //onClick={addToDo} runs the addToDo function
      onClick={addTodo}>Add</button>
      <p>
        {remaining} {remaining === 1 ? "task" : "tasks"} left
      </p>
      <ul>
        {todos.map((todo,index) => (
          <li //{todos.map(...)} loops over the todos array, for every item in the list create a li item
              //index is used as it is a unique key
          key ={index}
          style={{textDecoration: todo.done ? "line-through" : "none"}}>
            {todo.text}{""}
          <button onClick={() => toggleDone(index)}>
            {todo.done ? "Undo" : "Done"}
          </button>
          <button onClick={() => deleteToDo(index)} style={{marginLeft: "8px"}}>
          Delete  
          </button>
          </li>
        ))}
        <button onClick={clearCompleted} style={{marginTop: "16px"}}>
            Clear Completed
        </button>
      </ul>
    </div>
  );
}
//lets other files use this component
export default App;