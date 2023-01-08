const initialState = { counter: 0 };

const CounterReducer = (state = initialState, action) => {
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "Decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
export default CounterReducer