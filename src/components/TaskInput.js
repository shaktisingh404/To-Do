import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../store/actions';

const TaskInput = ({ isEditing, taskToEdit, setIsEditing, setTaskToEdit }) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (isEditing && taskToEdit) {
        dispatch(updateTask(taskToEdit.id, task));
        setIsEditing(false);
        setTaskToEdit(null);
      } else {
        dispatch(addTask(task));
      }
      setTask('');
    }
  };

  React.useEffect(() => {
    if (isEditing && taskToEdit) {
      setTask(taskToEdit.text);
    }
  }, [isEditing, taskToEdit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add a new task'
        />
        <button type='submit'>{isEditing ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskInput;
