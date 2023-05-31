import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducer/index";
import { addExercise, addSet } from "./action/action";
import { Exercise } from "./reducer/Reducer";

function App() {
  const [newExercise, setNewExercise] = useState("");
  const inputWeight: React.MutableRefObject<any[]> = useRef([]); //이부분 공부 더 해야함
  const inputReps: React.MutableRefObject<any[]> = useRef([]);
  const exercise = useSelector((state: RootState) => state.ExerciseReducer);
  const dispatch = useDispatch();
  //console.log(exercise);
  const handleNewExercise = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setNewExercise(text);
  };

  const handleAddExercise = () => {
    dispatch(addExercise(newExercise));
    setNewExercise("");
  };

  const handleAddSet = (exerciseId: number) => {
    const weight = parseInt(
      inputWeight.current[exerciseId].value as string,
      10
    );
    const reps = parseInt(inputReps.current[exerciseId].value as string, 10);
    //parsInt(value as (추론하라고 알려줄 타입), 진법)
    console.log(weight, typeof reps, exerciseId);

    if (weight !== null || reps !== null) {
      dispatch(addSet(exerciseId, reps, weight));
      //매개변수 순서 맞춰서 보내야하는데 순서 반대로 적어서 개고생
    } else {
      alert("모두 입력해 주세요");
    }
  };

  return (
    <div>
      <input
        value={newExercise}
        onChange={(e) => handleNewExercise(e)}
        placeholder="운동을 입력하세요"
      ></input>
      <button onClick={handleAddExercise}>추가</button>
      <div>
        <h2>
          {exercise.map((e: Exercise) => (
            <div key={e.exerciseId}>
              <div>
                {e.exerciseName} <button>삭제</button>
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
                <button onClick={() => handleAddSet(e.exerciseId)}>
                  세트추가
                </button>
                {e.set.map((s, index) => (
                  <div key={s.setId}>
                    <span>{index + 1}세트</span>
                    <span>{s.weight}kg</span>
                    <span>{s.reps}회</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </h2>
      </div>
    </div>
  );
}

export default App;
