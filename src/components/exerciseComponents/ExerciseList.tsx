import { ExerciseState, Exercise } from "../../reducer/ExerciseReducer";
import AddSet from "./SetList";
import { Collapse, Button, Popover } from "antd";
import { Functions } from "../../utils/ExerciseFunctions.ts";
import CarouselComponent from "../otherComponents/CarouselComponent.tsx";

const { Panel } = Collapse;

type ExerciseItemProps = {
  exercise: ExerciseState;
  handleRemoveExercise: (exerciseId: number) => void;
  handleAddSet: (exerciseId: number) => void;
  handleRemoveSet: (exerciseId: number, setId: number) => void;
  onToggle: (setId: number) => void;
  inputWeight: React.MutableRefObject<any[]>;
  inputReps: React.MutableRefObject<any[]>;
  handleSaveData: () => void;
  handleSaveLogs: () => void;
};

const ExerciseList = () => {
  const {
    exercise,
    handleRemoveExercise,
    inputWeight,
    inputReps,
    handleAddSet,
    handleRemoveSet,
    onToggle,
    handleSaveData,
    handleSaveLogs,
  }: ExerciseItemProps = Functions();

  if (exercise.length === 0) {
    return (
      <div className="  bg-slate-200 bottom-0 left-0 right-0">
        <CarouselComponent />
      </div>
    );
  }

  return (
    <div className="mt-5 flex flex-col">
      {exercise.map((e: Exercise, index) => (
        <Collapse
          key={index}
          className="m-2 bg-slate-100 text-center"
          defaultActiveKey={["0"]}
          size="large"
          expandIconPosition="end"
        >
          <Panel
            header={
              <span className="text-lg md:text-xl font-semibold font-sans">
                {e.exerciseName}
              </span>
            }
            key={index}
          >
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
              <div className="flex flex-col sm:flex sm:flex-row md:flex md:flex-row justify-center">
                <input
                  className="mx-2 px-4 py-2 border-b border-black text-gray-600 bg-white focus:outline-none focus:shadow-outline max-w-sm md:max-w-full"
                  placeholder="목표 무게"
                  type="number"
                  ref={
                    (el) =>
                      (inputWeight.current[e.exerciseId] =
                        el) /*어떤운동의 input요소인지 알아야함 */
                  }
                />
                <input
                  className="mx-2 px-4 py-2 border-b border-black text-gray-600 bg-white focus:outline-none focus:shadow-outline max-w-sm md:max-w-full"
                  placeholder="목표 횟수"
                  type="number"
                  ref={(el) => (inputReps.current[e.exerciseId] = el)}
                />
                <Button
                  type="primary"
                  className=" bg-blue-500 rounded-lg ml-1 md:ml-5 mt-5"
                  onClick={() => handleAddSet(e.exerciseId)}
                >
                  도전
                </Button>
              </div>

              <AddSet
                e={e}
                handleRemoveSet={handleRemoveSet}
                onToggle={onToggle}
              />
            </div>
          </Panel>
        </Collapse>
      ))}
      <div className="m-3 flex justify-center ">
        <Popover
          content="페이지를 나가도 작성중인 내용이 유지돼요"
          title="작성중인 내용을 임시저장 합니다."
          placement="bottom"
        >
          <button
            className="w-full m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
            onClick={handleSaveData}
          >
            임시저장
          </button>
        </Popover>
        <Popover
          content="주의하세요! 이전기록은 사라집니다!"
          title="기록탭이 현재의 기록으로 바뀝니다."
          placement="bottom"
        >
          <button
            className="w-full m-3 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 border"
            onClick={handleSaveLogs}
          >
            운동완료
          </button>
        </Popover>
      </div>
    </div>
  );
};

export default ExerciseList;
