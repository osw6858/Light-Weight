import { ActionType } from "../action/action";

//하나의 운동안에 있는 하나의 세트에 들어가는 정보
export type Set = {
  setId: number;
  weight: number;
  reps: number;
  done: boolean;
};

//하나의 운동에 들어가는 정보
export type Exercise = {
  exerciseId: number;
  exerciseName: string;
  set: Set[];
};

export type ExerciseState = Exercise[];

const initialState: ExerciseState = [];

const ExerciseReducer = (
  state: ExerciseState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      return [
        {
          exerciseId: action.payload.exerciseId,
          exerciseName: action.payload.exerciseName,
          set: [],
        },
        ...state,
      ];
    case "REMOVE_EXERCISE":
      return [...state].filter(
        (exercise) => exercise.exerciseId !== action.payload.exerciseId
      );

    case "ADD_SET":
      return [...state].map((exercise) => {
        if (exercise.exerciseId === action.payload.exerciseId) {
          return {
            ...exercise,
            set: [
              ...exercise.set,
              {
                setId: action.payload.setId,
                weight: action.payload.weight,
                reps: action.payload.reps,
                done: false,
              },
            ],
          };
        }

        return exercise;
      });
    case "REMOVE_SET":
      return state.map((exercise) => {
        if (exercise.exerciseId === action.payload.exerciseId) {
          return {
            ...exercise,
            set: exercise.set.filter(
              (set) => set.setId !== action.payload.setId
            ),
          };
        }
        return exercise;
      });
    case "RESTORE_DATA":
      return action.payload;

    case "TOGGLE_COMPLETE":
      return state.map((exercise) => {
        return {
          ...exercise,
          set: exercise.set.map((s) =>
            s.setId === action.payload ? { ...s, done: !s.done } : s
          ),
        };
      });
    default:
      return state;
  }
};

export default ExerciseReducer;
