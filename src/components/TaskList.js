import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, deleteAllTasks } from '../store/actions';
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ setIsEditing, setTaskToEdit }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(deleteAllTasks())}
        className='delete-all-button'
      >
        <FontAwesomeIcon icon={faTrashAlt} /> Delete All
      </button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={() => dispatch(deleteTask(task.id))}
            toggleTask={() => dispatch(toggleTask(task.id))}
            editTask={() => {
              setIsEditing(true);
              setTaskToEdit(task);
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
