import { Exercise } from "../reducer/Reducer";
import { DeleteOutlined } from "@ant-design/icons";
type SetItem = {
  e: Exercise;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
};

const AddSet = ({ e, handleRemoveSet }: SetItem) => {
  return (
    <div>
      {e.set.map((s, index) => (
        <div className=" flex items-center justify-around mt-3" key={s.setId}>
          <span className=" text-sm sm:text-base md:text-lg p-1 font-bold">
            {index + 1}세트
          </span>
          <span className="text-sm sm:text-base md:text-lg p-1">
            {s.weight}kg
          </span>
          <span className="text-sm sm:text-base md:text-lg p-1">
            {s.reps}회
          </span>
          <DeleteOutlined
            onClick={() => handleRemoveSet(e.exerciseId, s.setId)}
          />
        </div>
      ))}
    </div>
  );
};

export default AddSet;
