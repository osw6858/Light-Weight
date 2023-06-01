import { ActionType } from "../action/action";

//하나의 운동안에 있는 하나의 세트에 들어가는 정보
export type Set = {
  setId: number;
  weight: number;
  reps: number;
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
        ...state,
        {
          exerciseId: action.payload.exerciseId,
          exerciseName: action.payload.exerciseName,
          set: [],
        },
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
              },
            ],
          };
        }
        /*
            틀린 코드 1
             return [...state][action.payload.exerciseId].set.push({
        setId: action.payload.setId,
        weight: action.payload.weight,
        reps: action.payload.reps
       })
        */
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
    /* 틀린코드 2
         return [...state].map(exercise =>  [...exercise.set].filter((set)=> set.setId !== action.payload.setId)) */
    default:
      return state;
  }
};

export default ExerciseReducer;

/*
 코드1 틀린 이유:  push메소드는 변경된 배열의 길이(length)를 반환하기 때문!
   concat을 써도 새로운 변수 할당을 안하면 기존 state 배열은 변화가 없기 때문

 2.
*/
