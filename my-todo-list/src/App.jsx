import React, { useState } from "react";
import "./App.css";
import WorkingBox from "./components/WorkingBox";
import DoneBox from "./components/DoneBox";
import TodoEditor from "./components/TodoEditor";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트", content: "강의보기", isDone: false },
    { id: 2, title: "자바스크립트", content: "책보기", isDone: false },
  ]);

  return (
    <div className="layout">
      <div className="screen-header">
        <h1>My Todo List</h1>
        <span>Jihye</span>
      </div>
      <TodoEditor todos={todos} setTodos={setTodos} />
      <div className="main">
        {todos.title}
        {todos.content}
        <WorkingBox todos={todos} setTodos={setTodos} />
        <DoneBox todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
