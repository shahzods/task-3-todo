import "./listitem.css";

function ListItem({ children, item, todos, setTodos }) {
  const { id, isComplated } = item;

  const handleDeleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos([...filteredTodos]);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEditTodo = (todoId) => {
    const editText = prompt("O'zgarishni kiriting !");
    const findedTodo = todos.find((e) => e.id === todoId);
    findedTodo.text = editText;
    setTodos([...todos]);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleChangeTodo = (todoId) => {
    const findedTodo = todos.find((e) => e.id === todoId);
    findedTodo.isComplated = !findedTodo.isComplated;
    setTodos([...todos]);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <li className="d-flex align-items-center mt-3">
      <span>id:{id}</span>
      <input
        onChange={(evt) => handleChangeTodo(id, evt)}
        defaultChecked={isComplated}
        className="mx-3 form-check-input"
        type="checkbox"
      />
      <span
        className={isComplated ? "text-decoration-line-through mx-3" : "mx-3"}
      >
        {children}
      </span>
      <button
        onClick={() => handleEditTodo(id)}
        className="btn btn-warning mx-3"
      >
        Edit
      </button>
      <button onClick={() => handleDeleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}

export default ListItem;
