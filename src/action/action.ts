import { ExerciseState } from "../reducer/Reducer";

const ADD_EXERCISE = "ADD_EXERCISE" as const;
const REMOVE_EXERCISE = "REMOVE_EXERCISE" as const;
const ADD_SET = "ADD_SET" as const;
const REMOVE_SET = "REMOVE_SET" as const;
const RESTORE_DATA = "RESTORE_DATA" as const;
const TOGGLE_TODO = "TOGGLE_TODO" as const;

let exerciseId = 0;
let setId = 0;

export const addExercise = (exerciseName: string) => ({
  type: ADD_EXERCISE,
  payload: {
    exerciseId: exerciseId++,
    exerciseName,
  },
});

export const removeExercise = (exerciseId: number) => ({
  type: REMOVE_EXERCISE,
  payload: {
    exerciseId,
  },
});

export const addSet = (exerciseId: number, reps: number, weight: number) => ({
  type: ADD_SET,
  payload: {
    exerciseId,
    reps,
    weight,
    setId: setId++,
  },
});

export const removeSet = (exerciseId: number, setId: number) => ({
  type: REMOVE_SET,
  payload: {
    exerciseId,
    setId,
  },
});

export const restoreData = (parsedData: ExerciseState) => ({
  type: RESTORE_DATA,
  payload: parsedData,
});

export const toggleTodo = (setId: number) => ({
  type: TOGGLE_TODO,
  payload: setId,
});

export type ActionType =
  | ReturnType<typeof addExercise>
  | ReturnType<typeof removeExercise>
  | ReturnType<typeof addSet>
  | ReturnType<typeof removeSet>
  | ReturnType<typeof restoreData>
  | ReturnType<typeof toggleTodo>;

//각 함수에 리턴값 타입을 추론해서 쓰기 위해
