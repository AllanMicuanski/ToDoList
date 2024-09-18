import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskInput = ({ newTask, onChange, onAdd }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa..."
        value={newTask}
        onChange={onChange}
      />
      <button className="add-button" onClick={onAdd}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default TaskInput;
