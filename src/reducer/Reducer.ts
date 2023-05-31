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
            틀린 코드 
             return [...state][action.payload.exerciseId].set.push({
        setId: action.payload.setId,
        weight: action.payload.weight,
        reps: action.payload.reps
       })
           }] ) */
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
    /* 틀린코드
         return [...state].map(exercise =>  [...exercise.set].filter((set)=> set.setId !== action.payload.setId)) */
    default:
      return state;
  }
};

export default ExerciseReducer;

/*
오류 & 잘못 이해한 부분
 1. 운동 아이드를 비교하고 일치하는 운동에 넣어야 하는데 비교 안하고 그냥 map돌림
 2. 스프레드 연산자 배열, 객체 추가 수정 잘못 이해하고 있던 부분 수정
*/
