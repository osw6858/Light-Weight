import { ExerciseState, Exercise } from "../reducer/Reducer";
import AddSet from "./SetList";
import { Collapse, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

type ExerciseItemProps = {
  exercise: ExerciseState;
  handleRemoveExercise: (exerciseId: number) => void;
  handleAddSet: (exerciseId: number) => void;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
  inputWeight: React.MutableRefObject<any[]>;
  inputReps: React.MutableRefObject<any[]>;
};

const ExerciseList = ({
  exercise,
  handleRemoveExercise,
  inputWeight,
  inputReps,
  handleAddSet,
  handleRemoveSet,
}: ExerciseItemProps) => {
  return (
    <div className="mt-10 flex flex-col">
      {exercise.map((e: Exercise) => (
        <Collapse
          className="m-2 bg-slate-100"
          defaultActiveKey={["1"]}
          size="large"
          expandIconPosition="end"
        >
          <Panel header={e.exerciseName} key="1">
            <div key={e.exerciseId}>
              <div className="flex items-center justify-end mb-3">
                <Button
                  type="primary"
                  danger
                  onClick={() => handleRemoveExercise(e.exerciseId)}
                >
                  운동 삭제
                </Button>
              </div>
              <div className=" md:flex justify-center">
                <input
                  className="mx-2 px-4 py-2 border-b border-black text-gray-600 bg-white focus:outline-none focus:shadow-outline max-w-sm md:max-w-full"
                  placeholder="무게 입력"
                  type="number"
                  ref={
                    (el) =>
                      (inputWeight.current[e.exerciseId] =
                        el) /*어떤운동의 input요소인지 알아야함 */
                  }
                />
                <input
                  className="mx-2 px-4 py-2 border-b border-black text-gray-600 bg-white focus:outline-none focus:shadow-outline max-w-sm md:max-w-full"
                  placeholder="횟수 입력"
                  type="number"
                  ref={(el) => (inputReps.current[e.exerciseId] = el)}
                />
                <Button
                  type="primary"
                  className=" bg-blue-500 rounded-lg ml-1 md:ml-5 mt-5"
                  onClick={() => handleAddSet(e.exerciseId)}
                >
                  세트 완료
                </Button>
              </div>

              <AddSet e={e} handleRemoveSet={handleRemoveSet} />
            </div>
          </Panel>
        </Collapse>
      ))}
    </div>
  );
};

export default ExerciseList;
