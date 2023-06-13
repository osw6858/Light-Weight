import { Exercise } from "../../reducer/Reducer.ts";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

type SetItem = {
  e: Exercise;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
  onToggle: (setId: number) => void;
};

const AddSet = ({ e, handleRemoveSet, onToggle }: SetItem) => {
  return (
    <div>
      {e.set.map((s, index) => (
        <div className=" flex items-center justify-around mt-3" key={s.setId}>
          <CheckOutlined onClick={() => onToggle(s.setId)} />
          <span
            className={
              s.done
                ? " text-base sm:text-base md:text-lg p-1 font-bold text-green-600"
                : "text-base sm:text-base md:text-lg p-1 font-bold text-gray-600"
            }
          >
            {s.done ? <span> 성공</span> : <span>{index + 1}세트</span>}
          </span>
          <span
            className={
              s.done
                ? " text-base sm:text-base md:text-lg p-1 font-bold line-through"
                : "text-base sm:text-base md:text-lg p-1  "
            }
          >
            {s.weight}kg
          </span>
          <span
            className={
              s.done
                ? " text-base sm:text-base md:text-lg p-1 font-bold line-through"
                : "text-base sm:text-base md:text-lg p-1  "
            }
          >
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
