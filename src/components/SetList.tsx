import { Exercise } from "../reducer/Reducer";
type SetItem = {
  e: Exercise;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
};

const AddSet = ({ e, handleRemoveSet }: SetItem) => {
  return (
    <div>
      {e.set.map((s, index) => (
        <div className=" text-lg" key={s.setId}>
          <span className="p-3 font-bold">{index + 1}세트</span>
          <span className="p-3">{s.weight}kg</span>
          <span className="p-3">{s.reps}회</span>
          <button
            className="m-4 rounded-md bg-red-500 text-white hover:bg-red-400 border p-1"
            onClick={() => handleRemoveSet(e.exerciseId, s.setId)}
          >
            세트삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddSet;
