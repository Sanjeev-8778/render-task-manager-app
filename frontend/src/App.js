import React, { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/tasks").then(res => res.json()).then(setTasks);
  }, []);

  const addTask = async () => {
    await fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    window.location.reload();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>{tasks.map((task, i) => <li key={i}>{task[1]}</li>)}</ul>
    </div>
  );
}

export default App;

