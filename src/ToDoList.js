import { useState } from "react";
import AddToDo from "./AddToDo";

export default function ToDoList() {
  const [todos, setToDos] = useState([{ id: 1, title: "Buy Veg" }]);

  const handleAdd = (title) => {
    setToDos([...todos, { id: todos.length + 1, title: title }]);
  };

  return (
    <>
      <h2>ToDoList</h2>
      <AddToDo onAdd={handleAdd}></AddToDo>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
