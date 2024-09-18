import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
import '../styles/ProgressBarComponent.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { text: 'Passear com o cachorro', completed: false },
    { text: 'Estudar POO', completed: false },
    { text: 'Jogar liga das lendas', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
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

  function toggleTaskCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;
  const progress =
    totalTasksCount === 0 ? 0 : (completedTasksCount / totalTasksCount) * 100;

  return (
    <div className="to-do-list">
      <h1>Lista de Tarefas</h1>
      <TaskInput
        newTask={newTask}
        onChange={handleInputChange}
        onAdd={addTask}
      />
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task.text}
            index={index}
            completed={task.completed}
            onDelete={deleteTask}
            onMoveUp={moveTaskUp}
            onMoveDown={moveTaskDown}
            onToggleCompletion={toggleTaskCompletion}
          />
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
