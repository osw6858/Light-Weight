import AddExercise from "./AddExercise.tsx";
import ExerciseList from "./ExerciseList.tsx";
import Timer from "../otherComponents/Timer.tsx";
import { Popover } from "antd";
import { Functions } from "../../utils/ExerciseFunctions.ts";
const ExerciseIndex = () => {
  const { handleSaveData, handleSaveLogs } = Functions();
  return (
    <>
      <Timer />
      <div className="flex flex-col max-w-screen-sm  mx-auto mt-5 ">
        <AddExercise />
        <ExerciseList />
        <div className="m-3 flex justify-center ">
          <Popover
            content="페이지를 나가도 작성중인 내용이 유지돼요"
            title="작성중인 내용을 임시저장 합니다."
            placement="bottom"
          >
            <button
              className="w-full m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
              onClick={handleSaveData}
            >
              임시저장
            </button>
          </Popover>
          <Popover
            content="기록탭에서 저장한 기록을 확인하세요."
            title="현재 작성한 기록을 저장합니다."
            placement="bottom"
          >
            <button
              className="w-full m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
              onClick={handleSaveLogs}
            >
              운동완료
            </button>
          </Popover>
        </div>
      </div>
    </>
  );
};

export default ExerciseIndex;
