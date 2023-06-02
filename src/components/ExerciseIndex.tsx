import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/index";
import {
  addExercise,
  addSet,
  removeExercise,
  removeSet,
  restoreData,
  toggleTodo,
} from "../action/action";
import { ExerciseState } from "../reducer/Reducer";
import AddExercise from "../components/AddExercise";
import ExerciseList from "../components/ExerciseList";
import Header from "../components/Header";

const ExerciseIndex = () => {
  const [newExercise, setNewExercise] = useState("");

  const inputWeight: React.MutableRefObject<any[]> = useRef([]); //이부분 공부 더 해야함
  const inputReps: React.MutableRefObject<any[]> = useRef([]);

  const exercise = useSelector((state: RootState) => state.ExerciseReducer);
  const dispatch = useDispatch();

  /**사용자가 입력한 운동이름을 가져오는 함수 */
  const handleNewExercise = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setNewExercise(text);
  };

  /** 운동을 추가하는 함수 */
  const handleAddExercise = () => {
    if (newExercise.trim() !== "") {
      dispatch(addExercise(newExercise));
    } else {
      alert("운동 이름을 입력해 주세요");
    }
    setNewExercise("");
  };

  /**입력한 운동의 세트를 추가하는 함수, 매개변수:운동ID*/
  const handleAddSet = (exerciseId: number) => {
    const weight = parseInt(
      inputWeight.current[exerciseId].value as string,
      10
    );
    const reps = parseInt(inputReps.current[exerciseId].value as string, 10);
    //parsInt(value as (추론하라고 알려줄 타입), 진법)

    if (!isNaN(weight) && !isNaN(reps)) {
      dispatch(addSet(exerciseId, reps, weight));

      inputWeight.current[exerciseId].value = "";
      inputReps.current[exerciseId].value = ""; // 초기화 할까 말까
    } else {
      alert("무게, 횟수 모두 입력해 주세요");
    }
  };

  /**입력한 운동을 지우는 함수, 매개변수:운동ID */
  const handleRemoveExercise = (exerciseId: number) => {
    dispatch(removeExercise(exerciseId));
  };

  /**입력한 운동의 세트를 지우는 함수, 매개변수:운동&세트ID */
  const handleRemoveSet = (exerciseId: number, setId: number) => {
    dispatch(removeSet(exerciseId, setId));
  };

  /**기록을 로컬스토리지에 저장하는 함수 */
  const handleSaveData = () => {
    localStorage.setItem("exerciseData", JSON.stringify(exercise));
    alert("데이터가 저장되었습니다.");
  };

  const onToggle = (setId: number) => {
    dispatch(toggleTodo(setId));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("exerciseData");

    if (savedData) {
      const parsedData: ExerciseState = JSON.parse(savedData);
      dispatch(restoreData(parsedData));
    }
  }, []);

  return (
    <div className=" h-screen">
      <Header />
      <div className="border border-black text-center">
        날씨 타임워치 들어갈 곳
      </div>
      <div className="flex flex-col max-w-screen-sm mx-auto mt-8">
        <AddExercise
          newExercise={newExercise}
          handleNewExercise={handleNewExercise}
          handleAddExercise={handleAddExercise}
        />
        <ExerciseList
          exercise={exercise}
          handleRemoveExercise={handleRemoveExercise}
          inputWeight={inputWeight}
          inputReps={inputReps}
          handleAddSet={handleAddSet}
          handleRemoveSet={handleRemoveSet}
          onToggle={onToggle}
        />
        <div className="m-3 flex justify-end">
          <button
            className="m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
            onClick={handleSaveData}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseIndex;
