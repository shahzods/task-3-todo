import "./App.css";
import { useState, useRef } from "react";
import List from "./components/List/List";
import ListItem from "./components/ListItem/ListItem";

function App() {
  const inputRef = useRef("");

  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );

  const handleInputValue = (evt) => {
    let newTodo = {
      id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
      text: inputRef.current.value,
      isComplated: false,
    };

    setTodos([...todos, newTodo]);
    evt.target.value = null;
  };
  window.localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleInputValue}>
          <input
            ref={inputRef}
            className="mt-3"
            type="text"
            placeholder="Todo..."
          />
          <button className="btn btn-warning" type="submit">
            Submit
          </button>
        </form>

        {todos.length && (
          <List>
            {todos.map((e) => (
              <ListItem key={e.id} item={e} todos={todos} setTodos={setTodos}>
                {e.text}
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
}

export default App;
