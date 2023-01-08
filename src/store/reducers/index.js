import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";


const rootReducers = combineReducers({
  counterValue: CounterReducer,
});
export default rootReducers;
