import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/index.ts";
import dayjs from "dayjs";
import {
  addExercise,
  addSet,
  removeExercise,
  removeSet,
  restoreData,
  toggleComplete,
} from "../action/action";
import { ExerciseState } from "../reducer/ExerciseReducer";

export const Functions = () => {
  const now = dayjs().format("YYYY-MM-DD");
  const [newExercise, setNewExercise] = useState("");
  let exerciseId = parseInt(localStorage.getItem("exerciseId") || "0");

  //사용자가 입력한 무게, 횟수
  const inputWeight: React.MutableRefObject<any[]> = useRef([]);
  const inputReps: React.MutableRefObject<any[]> = useRef([]);

  //운동기록
  const exercise = useSelector((state: RootState) => state.ExerciseReducer);
  const dispatch = useDispatch();

  //타이머
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

    if (weight <= 0) {
      alert("무게는 0kg 이상 입력해야 합니다.");
      return;
    } else if (reps <= 0) {
      alert("적어도 한개는 하셔야죠.");
      return;
    } else if (weight > 999 || reps > 999) {
      alert("입력제한초과! 최대무게:999kg, 최대횟수:999회");
      return;
    }

    if (!isNaN(weight) && !isNaN(reps)) {
      dispatch(addSet(exerciseId, reps, weight));

      //inputWeight.current[exerciseId].value = "";
      // inputReps.current[exerciseId].value = "";
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

    alert("데이터가 임시 저장되었습니다.");
  };

  const handleSaveLogs = () => {
    const exerciseLog = JSON.parse(
      localStorage.getItem("exerciseLog") as string
    );
    let exerciseLogs;

    if (exerciseLog !== null) {
      exerciseLogs = [
        {
          exerciseId: exerciseId + 1,
          now: now,
          exercise: exercise,
        },
        ...exerciseLog,
      ];
    } else {
      exerciseLogs = [
        {
          exerciseId: exerciseId,
          now: now,
          exercise: exercise,
        },
      ];
    }

    // exerciseId 증가
    exerciseId++;

    // console.log("건너가는값", exerciseLogs);

    localStorage.setItem("exerciseId", exerciseId.toString());
    localStorage.setItem("exerciseLog", JSON.stringify(exerciseLogs));
    localStorage.setItem("exerciseData", JSON.stringify(exercise));

    alert("기록탭에서 오늘 들어올린 무게를 확인해 보세요!");
  };

  /**완료한 운동 체크하는 함수, 매개변수: 세트ID */
  const onToggle = (setId: number) => {
    dispatch(toggleComplete(setId));
  };

  /**로컬스토리지에 저장된 기록이 있다면 불러오기 */
  useEffect(() => {
    const savedData = localStorage.getItem("exerciseData");

    if (savedData) {
      const parsedData: ExerciseState = JSON.parse(savedData);
      dispatch(restoreData(parsedData));
    }
  }, []);

  /**타이머 함수 */
  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds < 59) {
          setSeconds((prevSeconds: number) => prevSeconds + 1);
        } else if (minutes < 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          setSeconds(0);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
  };

  return {
    exercise,
    handleAddExercise,
    handleAddSet,
    handleRemoveExercise,
    handleRemoveSet,
    handleSaveData,
    onToggle,
    handleNewExercise,
    inputWeight,
    inputReps,
    newExercise,
    setNewExercise,
    handleStart,
    handleStop,
    handleReset,
    minutes,
    seconds,
    isRunning,
    handleSaveLogs,
  };
};
