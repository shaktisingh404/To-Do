import { createStore } from 'redux';
import rootReducer from './reducers';

// Load the state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save the state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks,
  });
});

export default store;
