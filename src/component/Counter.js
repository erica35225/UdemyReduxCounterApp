import { useDispatch, useSelector } from "react-redux";
import styles from "../component/Counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterValue.counter);
  
  function incrementHandler() {
    dispatch({ type: "Increment" });
  }
  function decrementHandler() {
    dispatch({ type: "Decrement" });
  }
 
  //console.log(counter);
  return (
    <div className={styles.container}>
      <button className={styles.button_increment} onClick={incrementHandler}>
        Increment
      </button>
      <div>{counter}</div>
      <button className={styles.button_decrement} onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
};
