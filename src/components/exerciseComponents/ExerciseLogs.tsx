import { isString } from "antd/es/button";
import { ExerciseState, Exercise } from "../../reducer/Reducer";
import { useState } from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const ExerciseLogs = () => {
  const [reset, setReset] = useState(false);

  type ExerciseLogs = {
    now: string;
    exercise: ExerciseState;
  };
  const getExerciseDate = localStorage.getItem("exerciseLog") as string;
  let exerciseLog: ExerciseLogs;

  const removeLogs = () => {
    localStorage.removeItem("exerciseLog");
    setReset(true);
    console.log(reset);
  };

  if (!isString(getExerciseDate)) {
    return (
      <div className="mt-10">
        <Result
          title="이런! 아직 운동기록이 없어요."
          extra={
            <Link to="/Light-Weight/">
              <Button>기록하러 가기</Button>
            </Link>
          }
        />
      </div>
    );
  } else {
    exerciseLog = JSON.parse(getExerciseDate);
    //console.log("운동기록", exerciseLog.exercise);
  }

  /**총 무게 계산 알고리즘 */
  const totalSum = exerciseLog.exercise.reduce((acc, e) => {
    const setTotal = e.set.reduce((setAcc, s) => {
      const total = s.done ? s.reps * s.weight : 0;
      return setAcc + total;
    }, 0);
    return acc + setTotal;
  }, 0);

  //console.log(totalSum);

  return (
    <div className="flex flex-col max-w-screen-sm  mx-auto mt-5 px-3">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">
        {exerciseLog.now}
      </h2>
      {exerciseLog.exercise.map((e: Exercise, index) => (
        <div className="bg-white rounded-lg p-4 mb-4" key={index}>
          <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
            {e.exerciseName}
          </h3>
          {e.set.map((s, index) => (
            <div className="flex items-center justify-center mb-2" key={index}>
              <span className="text-base sm:text-base md:text-lg p-1  text-gray-600 font-semibold">
                {index + 1}세트
              </span>
              <span className="text-base sm:text-base md:text-lg p-1">
                {s.reps}회
              </span>
              <span className="text-base sm:text-base md:text-lg p-1">
                {s.weight}Kg
              </span>
              <span
                className={`text-base sm:text-base md:text-lg p-1 ${
                  s.done ? "text-green-500" : "text-red-500"
                } font-bold`}
              >
                {s.done ? "성공" : "실패"}
              </span>
            </div>
          ))}
        </div>
      ))}
      <div className="text-lg font-semibold text-gray-800 mb-4 text-center">
        총 운동 볼륨: {totalSum}Kg
      </div>
      <button
        onClick={removeLogs}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        삭제
      </button>
    </div>
  );
};

export default ExerciseLogs;
