import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
import styled from 'styled-components';

interface Task {
  text: string;
  completed: boolean;
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ProgressContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  margin: 20px 0;
`;

const ProgressBar = styled.div<{ width: string }>`
  height: 20px;
  background-color: #76c7c0;
  border-radius: 5px;
  width: ${(props) => props.width};
`;

const ToDoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { text: 'Passear com o cachorro', completed: false },
    { text: 'Estudar POO', completed: false },
    { text: 'Jogar liga das lendas', completed: false },
  ]);
  const [newTask, setNewTask] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index: number) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index: number) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const totalTasksCount = tasks.length;
  const progress = totalTasksCount === 0 ? 0 : (completedTasksCount / totalTasksCount) * 100;

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <TaskInput newTask={newTask} onChange={handleInputChange} onAdd={addTask} />
      <ProgressContainer>
        <ProgressBar width={`${progress}%`} />
      </ProgressContainer>
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
    </Container>
  );
};

export default ToDoList;
