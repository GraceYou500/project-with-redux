import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'add') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'add5') {
    return { counter: state.counter + action.value };
  }
  if (action.type === 'minus') {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(counterReducer);

// const subscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };
// store.subscribe(subscriber);

// store.dispatch({ type: 'add' });

export default store;
