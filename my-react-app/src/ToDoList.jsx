import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faArrowUp,
  faArrowDown,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    'Passear com o cachorro',
    'Estudar POO',
    'Jogar liga das lendas',
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button
              className="move-up-button"
              onClick={() => moveTaskUp(index)}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button
              className="move-down-button"
              onClick={() => moveTaskDown(index)}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
