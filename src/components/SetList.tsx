import { Exercise } from "../reducer/Reducer";
type SetItem = {
  e: Exercise;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
};

const AddSet = ({ e, handleRemoveSet }: SetItem) => {
  return (
    <div>
      {e.set.map((s, index) => (
        <div key={s.setId}>
          <span>{index + 1}세트</span>
          <span>{s.weight}kg</span>
          <span>{s.reps}회</span>
          <button onClick={() => handleRemoveSet(e.exerciseId, s.setId)}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddSet;
