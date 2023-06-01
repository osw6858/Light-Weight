import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/index";
import {
  addExercise,
  addSet,
  removeExercise,
  removeSet,
  restoreData,
} from "../action/action";
import { ExerciseState } from "../reducer/Reducer";
import AddExercise from "../components/AddExercise";
import ExerciseList from "../components/ExerciseList";

const ExerciseIndex = () => {
  const [newExercise, setNewExercise] = useState("");
  const inputWeight: React.MutableRefObject<any[]> = useRef([]); //이부분 공부 더 해야함
  const inputReps: React.MutableRefObject<any[]> = useRef([]);
  const exercise = useSelector((state: RootState) => state.ExerciseReducer);
  const dispatch = useDispatch();
  const handleNewExercise = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text: string = e.target.value;
    setNewExercise(text);
  };

  const handleAddExercise = () => {
    if (newExercise.trim() !== "") {
      dispatch(addExercise(newExercise));
    } else {
      alert("운동 이름을 입력해 주세요");
    }
    setNewExercise("");
  };

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

  const handleRemoveExercise = (exerciseId: number) => {
    dispatch(removeExercise(exerciseId));
  };

  const handleRemoveSet = (exerciseId: number, setId: number) => {
    dispatch(removeSet(exerciseId, setId));
  };

  const handleSaveData = () => {
    localStorage.setItem("exerciseData", JSON.stringify(exercise));
    alert("데이터가 임시 저장되었습니다.");
  };

  useEffect(() => {
    const savedData = localStorage.getItem("exerciseData");

    if (savedData) {
      const parsedData: ExerciseState = JSON.parse(savedData);
      dispatch(restoreData(parsedData));
    }
  }, []);

  return (
    <div>
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
      />
      <div>
        <button onClick={handleSaveData}>임시저장</button>
      </div>
    </div>
  );
};

export default ExerciseIndex;
