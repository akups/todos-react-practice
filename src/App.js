import "./App.css";
import { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["clean the room"]);
  const [todo, setTodo] = useState("");
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const onClick = () => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <button onClick={onClick}>Add todo</button>
      <input type="text" onChange={handleChange} />
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
