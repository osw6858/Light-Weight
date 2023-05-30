import {ActionType} from '../action/action'

//하나의 운동안에 있는 하나의 세트에 들어가는 정보
export type Set = {
  setId:number,
  weight:number,
  reps:number
}

//하나의 운동에 들어가는 정보
export type Exercise = {
  exerciseId:number,
  exerciseName:string,
  set: Set[]
}

export type ExerciseState = Exercise[];

const initialState:Exercise[] = [];

const ExerciseReducer = (state:ExerciseState = initialState, action:ActionType) => {
      switch(action.type) {
        case  "ADD_EXCERCISE":
          return [...state, {
            exerciseId:action.payload.exerciseId,
            exerciseName:action.payload.exerciseName
          }]
        case "REMOVE_EXERCISE":
           return [...state].filter((exercise) => exercise.exerciseId !== action.payload.exerciseId)

        case "ADD_SET" :
           return [...state].map(exercise => [...exercise.set,{
            setId: action.payload.setId,
            weight: action.payload.weight,
            reps: action.payload.reps
           }] )
        case "REMOVE_SET":
           return [...state].map(exercise =>  [...exercise.set].filter((set)=> set.setId !== action.payload.setId))
        
        default:state
      }
        
}

export default ExerciseReducer;