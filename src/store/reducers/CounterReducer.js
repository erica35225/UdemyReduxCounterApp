const initialState = { counter: 0 , showCounter: true};

const CounterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === "ToggleCounter") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }
  return state;
};
export default CounterReducer