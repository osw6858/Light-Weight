import { ExerciseState, Exercise } from "../reducer/Reducer";
import AddSet from "./AddSet";

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
          <div>
            <span>{e.exerciseName}</span>
            <button onClick={() => handleRemoveExercise(e.exerciseId)}>
              삭제
            </button>
          </div>
          <div>
            <input
              placeholder="무게입력"
              type="number"
              ref={
                (el) =>
                  (inputWeight.current[e.exerciseId] =
                    el) /*어떤운동의 input요소인지 알아야함 */
              }
            />
            <input
              placeholder="횟수 입력"
              type="number"
              ref={(el) => (inputReps.current[e.exerciseId] = el)}
            />
            <button onClick={() => handleAddSet(e.exerciseId)}>세트추가</button>
            <AddSet e={e} handleRemoveSet={handleRemoveSet} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
