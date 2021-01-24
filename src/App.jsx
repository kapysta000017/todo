import React, { useState } from 'react';
import TodoLists from './components/TodoLists';
import InputTodo from './components/InputTodo';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
      color: 'red',
      completed: false,
    },
    {
      id: 2,
      text: 'Сохранить задачи в массив стейта',
      color: 'green',
      completed: false,
    },
  ]);
  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        {tasks.map((obj) => (
          <TodoLists key={obj.id} setTasks={setTasks} obj={obj} />
        ))}
        <div className="todo-input">
          <InputTodo setTasks={setTasks} colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default App;
