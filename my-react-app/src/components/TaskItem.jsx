import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({
  task,
  index,
  completed,
  onDelete,
  onMoveUp,
  onMoveDown,
  onToggleCompletion,
}) => {
  return (
    <li className={completed ? 'completed' : ''}>
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompletion(index)}
        />
        <span className="checkmark"></span>
      </label>
      <span className="text">{task}</span>
      <button className="delete-button" onClick={() => onDelete(index)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button className="move-up-button" onClick={() => onMoveUp(index)}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <button className="move-down-button" onClick={() => onMoveDown(index)}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </li>
  );
};

export default TaskItem;
