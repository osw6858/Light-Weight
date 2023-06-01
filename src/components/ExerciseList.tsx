import { ExerciseState, Exercise } from "../reducer/Reducer";
import AddSet from "./SetList";

type ExerciseItemProps = {
  exercise: ExerciseState;
  handleRemoveExercise: (exerciseId: number) => void;
  handleAddSet: (exerciseId: number) => void;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
  inputWeight: React.MutableRefObject<any[]>;
  inputReps: React.MutableRefObject<any[]>;
};

const ExerciseList = ({
  exercise,
  handleRemoveExercise,
  inputWeight,
  inputReps,
  handleAddSet,
  handleRemoveSet,
}: ExerciseItemProps) => {
  return (
    <div>
      {exercise.map((e: Exercise) => (
        <div key={e.exerciseId}>
          <div className=" mx-3">
            <span className=" text-2xl font-bold">{e.exerciseName}</span>
            <button
              className="m-4 rounded-md bg-red-500 text-white hover:bg-red-400 border p-1"
              onClick={() => handleRemoveExercise(e.exerciseId)}
            >
              운동삭제
            </button>
          </div>
          <div>
            <input
              className="m-3 w-1/3 h-8 rounded-sm text-center"
              placeholder="무게입력"
              type="number"
              ref={
                (el) =>
                  (inputWeight.current[e.exerciseId] =
                    el) /*어떤운동의 input요소인지 알아야함 */
              }
            />
            <input
              className="m-3 w-1/3 h-8 rounded-sm text-center"
              placeholder="횟수 입력"
              type="number"
              ref={(el) => (inputReps.current[e.exerciseId] = el)}
            />
            <button
              className="m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
              onClick={() => handleAddSet(e.exerciseId)}
            >
              세트추가
            </button>
            <AddSet e={e} handleRemoveSet={handleRemoveSet} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
