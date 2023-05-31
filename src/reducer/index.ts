import { combineReducers } from "redux";
import ExerciseReducer from "../reducer/Reducer";

const rootReducer = combineReducers({
  ExerciseReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
