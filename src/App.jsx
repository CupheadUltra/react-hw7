import React from "react";
import TaskList from "./List";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Список завдань</h1>
      <TaskList />
    </div>
  );
}
