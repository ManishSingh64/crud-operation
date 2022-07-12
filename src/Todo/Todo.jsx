import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AddTodo } from "./AddTodo";

export const Todo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    axios.get(`http://localhost:8080/data`).then((r) => {
      //   console.log(r.data);
      setData(r.data);
    });
  }

  function postTodos(data) {
    // console.log(data,'data')
    axios.post(`http://localhost:8080/data`, data).then((r) => {
      //   console.log(r.data);
      getTodos();
    });
  }

  function deleteTodos(id) {
    // console.log(id);
    axios.delete(`http://localhost:8080/data/${id}`).then((r) => {
      getTodos();
    });
  }

  function ToggleTodos(el) {
    // console.log(el);
    axios
      .patch(`http://localhost:8080/data/${el.id}`, {
        status: !el.status,
      })
      .then((r) => {
        console.log(r.data);
        getTodos();
      });
  }
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {data.map((el) => (
          <div
            key={el.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "60%",
              margin: "auto",
            }}
          >
            <h1>{el.todo}</h1>
            <h2>{el.status ? "done" : "not done"}</h2>
            <button onClick={() => deleteTodos(el.id)}>Delete</button>
            <button onClick={() => ToggleTodos(el)}>Toggle</button>
          </div>
        ))}
      </div>
      <AddTodo postTodos={postTodos} />
    </div>
  );
};
