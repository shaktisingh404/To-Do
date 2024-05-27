import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, deleteTask, toggleTask, editTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={toggleTask}
        className='task-checkbox'
      />
      <span className='task-text'>{task.text}</span>
      <button className='edit-button' onClick={editTask}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className='delete-button' onClick={deleteTask}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TaskItem;
