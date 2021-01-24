import React, { useState } from 'react';

export default function InputTodo({ setTasks, colors }) {
  const [value, setValue] = useState('');
  const [clickColor, setClickColor] = useState('grey');

  function onSubmit(e) {
    setTasks((state) => [
      ...state,
      {
        id: state.length !== 0 ? state[state.length - 1].id + 1 : 0,
        text: value.trim(),
        color: clickColor,
        completed: false,
      },
    ]);
    setValue('');
    setClickColor('grey');
    e.preventDefault();
  }
  return (
    <form onSubmit={(e) => (value !== '' ? onSubmit(e) : e.preventDefault())}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Текст задачи..."
      />
      <ul>
        {colors.map((color) => (
          <li
            onClick={() => setClickColor(color)}
            key={color}
            className={
              clickColor === color ? `todo-color ${color} active` : `todo-color ${color}`
            }></li>
        ))}
      </ul>
    </form>
  );
}
