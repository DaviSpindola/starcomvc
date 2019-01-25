import { combineReducers } from "redux";
import moviesReducer from "./movies";
import { sessionContentReducer } from "./session";

const rootReducer = combineReducers({
  moviesState: moviesReducer,
  sessionContentState: sessionContentReducer
});

export default rootReducer;
