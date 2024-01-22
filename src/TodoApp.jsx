import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, taskName]);
      setTaskName('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
     <div class="celek"> <h1>Seznam úkolů</h1>
      <div class="obsah">
        <input
          type="text"
          placeholder="Zadejte název úkolu"
          value={taskName}
          onChange={handleInputChange}
        />
        <button class="add" onClick={handleAddTask}>Přidat úkol</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button class="delete" onClick={() => handleRemoveTask(index)}>Odstranit</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default TodoApp;
