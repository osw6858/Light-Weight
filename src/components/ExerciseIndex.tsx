import AddExercise from "../components/AddExercise";
import ExerciseList from "../components/ExerciseList";
import Header from "../components/Header";
import { Functions } from "../helper/Functions";
import Timer from "./Timer";

const ExerciseIndex = () => {
  const { handleSaveData } = Functions();

  return (
    <div className=" h-screen">
      <Header />
      <Timer />
      <div className="flex flex-col max-w-screen-sm mx-auto mt-5">
        <AddExercise />
        <ExerciseList />
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
