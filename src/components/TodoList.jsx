import todoList from "./todoList.module.scss"
import closeSvg from "../bd/close.svg"
import penSvg from "../bd/pen.svg"

export default function TodoList({ tasks, setTasks }) {
  const onEditTodo = (task) => {
    setTasks((state) =>
      state.map((item) => {
        if (item.id === task.id) {
          const text = window.prompt("Введи", [task.text])
          if (text !== null) {
            if (text.split(" ").join("")) {
              item.text = text.trim()
            }
          }
        }
        return item
      })
    )
  }

  const onRemoveTodo = (task) => {
    setTasks((state) => state.filter((item) => item.id !== task.id))
  }

  const onToggleTodo = (task) => {
    setTasks((state) =>
      state.map((item) => {
        if (item.id === task.id) {
          item.completed = !task.completed
        }
        return item
      })
    )
  }

  return tasks.map((task) => {
    return (
      <div className={todoList.inner} key={task.id}>
        <label className={todoList.label}>
          <input
            className={todoList.defaultCheckBox}
            onChange={() => onToggleTodo(task)}
            type="checkbox"
            checked={task.completed}
          />
          <span className={todoList.styleCheckBox}></span>
          <div className={todoList[task.color]}></div>
          <p className={todoList.text}>{task.text}</p>
        </label>
        <img
          className={todoList.img}
          src={penSvg}
          alt="pen"
          onClick={() => onEditTodo(task)}
        />
        <img
          className={todoList.img}
          src={closeSvg}
          alt="close"
          onClick={() => onRemoveTodo(task)}
        />
      </div>
    )
  })
}
