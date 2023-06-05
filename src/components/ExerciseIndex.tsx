import AddExercise from "../components/AddExercise";
import ExerciseList from "../components/ExerciseList";
import Header from "../components/Header";
import { Functions } from "../utils/Functions";
import CarouselComponent from "./CarouselComponent";

import Timer from "./Timer";

const ExerciseIndex = () => {
  const { handleSaveData } = Functions();

  return (
    <div className="h-screen bg-slate-200">
      <Header />
      <Timer />
      <div className=" bg-white mx-auto p-4 m-5 w-4/5 h-2/3 overflow-y-auto">
        <div className="flex flex-col max-w-screen-sm mx-auto mt-5  ">
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
      </div>
      <div className=" bg-slate-200 bottom-0 left-0 right-0">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default ExerciseIndex;
