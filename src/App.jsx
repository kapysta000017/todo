import React, { useState } from "react"
import TodoList from "./components/TodoList"
import InputTodo from "./components/InputTodo"
import { todos } from "./bd/bd"
import "./app.scss"

function App() {
  const [tasks, setTasks] = useState(todos)
  return (
    <div className="app">
      <h2>Список задач</h2>
      <TodoList setTasks={setTasks} tasks={tasks} />
      <InputTodo setTasks={setTasks} />
    </div>
  )
}

export default App
