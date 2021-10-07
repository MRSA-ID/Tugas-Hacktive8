import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  if (!localStorage.getItem("login")) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Todo List</h1>
          <div className="table-responsive">
            <table class="table">
              <thead class="table-dark">
                <tr>
                  <th>id</th>
                  <th>Title</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, idx) => (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? "v" : "x"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
