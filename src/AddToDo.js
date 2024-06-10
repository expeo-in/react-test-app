import { useState } from "react";

export default function AddToDo({ onAdd }) {
  const [todo, setToDo] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setToDo(e.target.value)}></input>
      <button onClick={() => onAdd(todo)}>Add</button>
    </>
  );
}
