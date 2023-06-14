import { ExerciseState, Exercise } from "../../reducer/ExerciseReducer.ts";
import { useState, useEffect } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Result, Badge, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const ExerciseLogs = () => {
  type ExerciseLogs = [
    {
      exerciseId: number;
      now: string;
      exercise: ExerciseState;
    }
  ];

  const storedExerciseLog = JSON.parse(
    localStorage.getItem("exerciseLog") as string
  ) as ExerciseLogs;

  const [exerciseLog, setExerciseLog] = useState<ExerciseLogs>(
    storedExerciseLog || []
  );

  useEffect(() => {
    setExerciseLog(storedExerciseLog);
  }, []);

  if (exerciseLog === null) {
    return (
      <div className="mt-10">
        <Result
          title="이런! 아직 운동기록이 없어요."
          extra={
            <Link to="/">
              <Button>기록하러 가기</Button>
            </Link>
          }
        />
      </div>
    );
  } else if (exerciseLog.length < 1) {
    return (
      <div className="mt-10">
        <Result
          title="남은 운동 기록이 없어요!"
          extra={
            <Link to="/">
              <Button>기록하러 가기</Button>
            </Link>
          }
        />
      </div>
    );
  }
  //console.log(exerciseLog);

  const removeLogs = (ID: number) => {
    const updateExerciseLog = [...exerciseLog].filter(
      (e) => e.exerciseId !== ID
    ) as ExerciseLogs;
    // console.log(updateExerciseLog);
    localStorage.setItem("exerciseLog", JSON.stringify(updateExerciseLog));
    setExerciseLog(updateExerciseLog);
  };

  return (
    <div className="flex flex-col max-w-screen-sm  mx-auto mt-5 px-5 pb-5">
      {exerciseLog.map((i, Iindex) => (
        <div className="py-3" key={Iindex}>
          <Badge.Ribbon text="오운완" color="cyan">
            <h2 className=" text-xl font-bold md:text-2xl">{i.now}</h2>
            {i.exercise.map((e: Exercise, Eindex) => (
              <div className="bg-white rounded-lg p-4 mb-4" key={Eindex}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {e.exerciseName}
                </h3>
                {e.set.map((s, Sindex) => (
                  <div
                    className="flex items-center justify-center mb-2"
                    key={Sindex}
                  >
                    <span className="text-base sm:text-base md:text-lg p-1  text-gray-600 font-semibold">
                      {Sindex + 1}세트
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
            <div className=" flex  items-center justify-between">
              <span className="text-lg font-semibold text-gray-800 mb-4 text-center">
                {" "}
                총 운동 볼륨:
                {i.exercise.reduce((acc, e) => {
                  const setTotal = e.set.reduce((setAcc, s) => {
                    const total = s.done ? s.reps * s.weight : 0;
                    return setAcc + total;
                  }, 0);
                  return acc + setTotal;
                }, 0)}
                Kg
              </span>
              <Popconfirm
                placement="bottomRight"
                title="기록을 삭제 할까요?"
                description="데이터는 복구할 수 없습니다."
                icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                onConfirm={() => removeLogs(i.exerciseId)}
                okType="danger"
                okText="네"
                cancelText="아니오"
              >
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400">
                  삭제
                </button>
              </Popconfirm>
            </div>
          </Badge.Ribbon>
        </div>
      ))}
    </div>
  );
};

export default ExerciseLogs;
