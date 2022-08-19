import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

// import { createStore } from 'redux';

// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === 'add') {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === 'add5') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'minus') {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === 'toggle') {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
