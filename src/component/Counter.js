import { number } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import styles from "../component/Counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterValue.counter);
  const showCounter = useSelector((state) => state.counterValue.showCounter);

  function incrementHandler() {
    dispatch({ type: "Increment" });
  }
  function decrementHandler() {
    dispatch({ type: "Decrement" });
  }
  function toggleCounterHandler() {
    dispatch({ type: "ToggleCounter" });
  }
  function IncreaseBy5Handler() {
    dispatch({ type: "IncreaseBy5", payload: 5 });
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
