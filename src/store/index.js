import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/CounterReducer";

// export const store = createStore(
//   rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
export const store = configureStore(
  {
    reducer: { counterValue: CounterSlice.reducer },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const CounterActions = CounterSlice.actions