import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'add' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'minus' });
  };

  const incrementBy5Handler = () => {
    dispatch({ type: 'add5', value: 5 });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementBy5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter2 extends Component {
//   incrementHandler() {
//     this.props.add();
//   }
//   decrementHandler() {
//     this.props.minus();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = oldState => {
//   const state = {
//     counter: oldState.counter,
//   };
//   return state;
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     add: () => dispatch({ type: 'add' }),
//     minus: () => dispatch({ type: 'minus' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
