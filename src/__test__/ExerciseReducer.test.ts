import ExerciseReducer, {
  ExerciseState,
  Exercise,
  Set,
} from "../reducer/Reducer";

import {
  addExercise,
  removeExercise,
  addSet,
  removeSet,
} from "../action/action";

describe("ExerciseReducer", () => {
  let initialState: ExerciseState;

  beforeEach(() => {
    initialState = [];
  });

  test("운동추가 테스트", () => {
    const exerciseName = "Squat";
    const action = addExercise(exerciseName);
    const nextState = ExerciseReducer(initialState, action);

    expect(nextState).toEqual([
      {
        exerciseId: 0,
        exerciseName: exerciseName,
        set: [],
      },
    ]);
  });

  test("운동삭제 테스트", () => {
    const exercise: Exercise = {
      exerciseId: 0,
      exerciseName: "Squat",
      set: [],
    };
    const prevState: ExerciseState = [exercise];
    const action = removeExercise(exercise.exerciseId);
    const nextState = ExerciseReducer(prevState, action);

    expect(nextState).toEqual([]);
  });

  test("세트추가 테스트", () => {
    const exerciseId = 0;
    const reps = 10;
    const weight = 100;
    const done = false;
    const set: Set = {
      setId: 0,
      reps: reps,
      weight: weight,
      done: done,
    };
    const exercise: Exercise = {
      exerciseId: exerciseId,
      exerciseName: "Squat",
      set: [],
    };
    const prevState: ExerciseState = [exercise];
    const action = addSet(exerciseId, reps, weight);
    const nextState = ExerciseReducer(prevState, action);

    expect(nextState).toEqual([
      {
        exerciseId: exerciseId,
        exerciseName: "Squat",
        set: [set],
      },
    ]);
  });

  test("세트 삭제 테스트", () => {
    const exerciseId = 0;
    const setId = 0;
    const done = false;
    const set: Set = {
      setId: setId,
      reps: 10,
      weight: 100,
      done: done,
    };
    const exercise: Exercise = {
      exerciseId: exerciseId,
      exerciseName: "Squat",
      set: [set],
    };
    const prevState: ExerciseState = [exercise];
    const action = removeSet(exerciseId, setId);
    const nextState = ExerciseReducer(prevState, action);

    expect(nextState).toEqual([
      {
        exerciseId: exerciseId,
        exerciseName: "Squat",
        set: [],
      },
    ]);
  });
});
