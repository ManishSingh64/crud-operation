import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddTodo = ({postTodos}) => {
  const [task, setTask] = useState({
    todo: "",
    id: uuidv4(),
    status: false,
  });

  function handleChange(e) {
    setTask({ ...task, todo: e.target.value });
  }
//   console.log("task", task);
  return (
    <div>
      <input type="text" placeholder="tasks" onChange={handleChange} />
      <button onClick={()=>postTodos(task)}>Add</button>
    </div>
  );
};
