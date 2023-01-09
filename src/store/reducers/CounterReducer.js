import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     Increment(state) {
//       state.counter++;
//     },
//     Decrement(state) {
//       state.counter--;
//     },
//     ToggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//     Increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//   },
// });

const CounterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "ToggleCounter") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  if (action.type === "IncreaseBy5") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  return state;
};
export default CounterReducer;
