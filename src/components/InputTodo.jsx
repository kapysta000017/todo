import classNames from "classnames"
import React, { useState } from "react"
import { colors } from "../bd/bd"
import inputTodo from "./inputTodo.module.scss"

export default function InputTodo({ setTasks }) {
  const [value, setValue] = useState("")
  const [selectColor, setSelectColor] = useState("")

  function onSubmit(e) {
    if (value.split(" ").join("") && selectColor) {
      setTasks((state) => [
        ...state,
        {
          id: state.length !== 0 ? state[state.length - 1].id + 1 : 0,
          text: value.trim(),
          color: selectColor,
          completed: false,
        },
      ])
      setValue("")
    }
    e.preventDefault()
  }
  return (
    <div className={inputTodo.inner}>
      <form onSubmit={onSubmit}>
        <input
          className={inputTodo.inputText}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Текст задачи..."
        />
        {colors.map((color) => (
          <label className={inputTodo.label} key={color}>
            <input
              className={inputTodo.defaultRadio}
              type="radio"
              name="rd"
              onChange={() => setSelectColor(color)}
            />
            <span
              className={classNames(
                inputTodo[color],
                inputTodo[`styleRadio-${color}`]
              )}
            ></span>
          </label>
        ))}
      </form>
    </div>
  )
}
