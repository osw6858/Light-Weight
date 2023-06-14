import AddExercise from "./AddExercise.tsx";
import ExerciseList from "./ExerciseList.tsx";
import Timer from "../otherComponents/Timer.tsx";

const ExerciseIndex = () => {
  return (
    <>
      <Timer />
      <div className="flex flex-col max-w-screen-sm  mx-auto mt-5 ">
        <AddExercise />
        <ExerciseList />
      </div>
    </>
  );
};

export default ExerciseIndex;
