import AddExercise from "./AddExercise";
import ExerciseList from "./ExerciseList";

import { Functions } from "../../utils/Functions";

import Timer from "../otherComponents/Timer";

const ExerciseIndex = () => {
  const { handleSaveData } = Functions();

  return (
    <>
      <Timer />
      <div className="flex flex-col max-w-screen-sm  mx-auto mt-5 ">
        <AddExercise />

        <ExerciseList />
        <div className="m-3 flex justify-center ">
          <button
            className="w-full m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
            onClick={handleSaveData}
          >
            저장
          </button>
        </div>
      </div>
    </>
  );
};

export default ExerciseIndex;
