import { Input } from "antd";
import { Functions } from "../helper/Functions";
type ExerciseInputProps = {
  newExercise: string;
  handleNewExercise: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddExercise: () => void;
};

const AddExercise = () => {
  const {
    handleAddExercise,
    handleNewExercise,
    newExercise,
  }: ExerciseInputProps = Functions();

  const { Search } = Input;
  return (
    <div className="mx-3">
      <Search
        className=" bg-blue-500 rounded-lg"
        placeholder="운동을 입력하세요"
        allowClear
        enterButton="추가"
        size="large"
        value={newExercise}
        onChange={(e) => handleNewExercise(e)}
        onSearch={handleAddExercise}
      />
    </div>
  );
};

export default AddExercise;
