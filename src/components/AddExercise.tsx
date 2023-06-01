type ExerciseInputProps = {
  newExercise: string;
  handleNewExercise: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddExercise: () => void;
};

const AddExercise = ({
  newExercise,
  handleNewExercise,
  handleAddExercise,
}: ExerciseInputProps) => {
  return (
    <div className="w-3/4">
      <div className="w-2/4 mx-auto">
        <input
          className=" w-3/4 h-11 rounded-sm text-center"
          value={newExercise}
          onChange={(e) => handleNewExercise(e)}
          placeholder="운동을 입력하세요"
        ></input>
        <button
          className="m-4 p-3 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
          onClick={handleAddExercise}
        >
          운동추가
        </button>
      </div>
    </div>
  );
};

export default AddExercise;
