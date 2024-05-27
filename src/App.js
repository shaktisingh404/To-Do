import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles.css';

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <Provider store={store}>
      <div className='app'>
        <h1>To-Do List</h1>
        <TaskInput
          isEditing={isEditing}
          taskToEdit={taskToEdit}
          setIsEditing={setIsEditing}
          setTaskToEdit={setTaskToEdit}
        />
        <TaskList setIsEditing={setIsEditing} setTaskToEdit={setTaskToEdit} />
      </div>
    </Provider>
  );
};

export default App;
