import { Input } from "antd";

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
  const { Search } = Input;
  return (
    <div className="">
      <Search
        className=" bg-blue-500 rounded-lg"
        placeholder="운동을 입력해 주세요"
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
