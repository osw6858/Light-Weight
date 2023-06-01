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
    <div>
      <input
        value={newExercise}
        onChange={(e) => handleNewExercise(e)}
        placeholder="운동을 입력하세요"
      ></input>
      <button onClick={handleAddExercise}>추가</button>
    </div>
  );
};

export default AddExercise;
