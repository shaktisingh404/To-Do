export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';

let nextTaskId = 0;

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: {
    id: ++nextTaskId,
    text,
    completed: false,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const deleteAllTasks = () => ({
  type: DELETE_ALL_TASKS,
});

export const updateTask = (id, newText) => ({
  type: UPDATE_TASK,
  payload: { id, newText },
});
