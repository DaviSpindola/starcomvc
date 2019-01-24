import { combineReducers } from "redux";
import moviesReducer from "./movies";

const rootReducer = combineReducers({
  moviesState: moviesReducer
});

export default rootReducer;
