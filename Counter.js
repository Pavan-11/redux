import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/store';

const Counter = () => {

  const dispatch = useDispatch();


  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter);

  const incrementHandlerBy5 = () => {
    dispatch(counterActions.increase(5));
  }

  const decremenHandlertBy5 = () => {
    dispatch(counterActions.decrease(5));
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerBy5}>Increment 5</button>
        <button onClick={decremenHandlertBy5}>Decrement 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
