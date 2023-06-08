import AddExercise from "./AddExercise";
import ExerciseList from "./ExerciseList";

import { Functions } from "../../utils/Functions";
import { Popover } from "antd";
import Timer from "../otherComponents/Timer";

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
            content="주의하세요! 이전기록은 사라집니다!"
            title="기록탭이 현재의 기록으로 바뀝니다."
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
