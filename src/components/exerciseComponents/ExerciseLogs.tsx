import { isString } from "antd/es/button";
import { ExerciseState, Exercise } from "../../reducer/Reducer";
import { useState } from "react";

const ExerciseLogs = () => {
  const [reset, setReset] = useState("");

  type ExerciseLogs = {
    now: string;
    exercise: ExerciseState;
  };
  const getExerciseDate = localStorage.getItem("exerciseLog") as string;
  let exerciseLog: ExerciseLogs;

  const removeLogs = () => {
    localStorage.removeItem("exerciseLog");
    setReset("삭제 테스트용 리렌더링");
  };

  if (!isString(getExerciseDate)) {
    return (
      <div>
        <h1>결과가 없습니다.</h1>
      </div>
    );
  } else {
    exerciseLog = JSON.parse(getExerciseDate);
  }

  return (
    <div>
      <h1>운동기록들 보는 페이지</h1>
      <div>
        {exerciseLog.exercise.map((e: Exercise, index) => (
          <div key={index}>
            <span>{exerciseLog.now}</span>
            <span>{e.exerciseName}</span>
            <button onClick={removeLogs}>모두삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLogs;
