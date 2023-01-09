import { useDispatch, useSelector } from "react-redux";
import styles from "../component/Counter.module.css";
import { CounterActions } from "../store";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterValue.counter);
  const showCounter = useSelector((state) => state.counterValue.showCounter);

  function incrementHandler() {
    dispatch(CounterActions.Increment());
  }
  function decrementHandler() {
    dispatch(CounterActions.Decrement());
  }
  function toggleCounterHandler() {
    dispatch(CounterActions.ToggleCounter());
  }
  function IncreaseBy5Handler() {
    dispatch(CounterActions.IncreaseBy5(5));
     // redux toolkit will generate an action with type and payload automatically
     // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
  }

  //console.log(counter);
  return (
    <div className={styles.container}>
      <button className={styles.button_increment} onClick={incrementHandler}>
        Increment
      </button>
      {showCounter && <div>{counter}</div>}
      <button className={styles.button_decrement} onClick={decrementHandler}>
        Decrement
      </button>
      <button
        className={styles.button_increment}
        onClick={toggleCounterHandler}
      >
        ToggleCounter
      </button>
      <button className={styles.button_increment} onClick={IncreaseBy5Handler}>
        IncreaseBy 5
      </button>
    </div>
  );
};
