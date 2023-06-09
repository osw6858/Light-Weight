import { Functions } from "../../utils/ExerciseFunctions";

const Timer = () => {
  const { handleStart, handleStop, handleReset, minutes, seconds, isRunning } =
    Functions();

  return (
    <div className="flex items-center justify-center text-slate-500 rounded-full text-5xl md:text-6xl sm:text-5xl mt-4 mb-0">
      <span className="mr-3">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
      <button
        className="bg-blue-600 text-white mx-2 text-sm sm:text-base md:text-base  rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1 hover:bg-blue-500"
        onClick={handleStart}
        disabled={isRunning}
      >
        휴식
      </button>
      <button
        className="bg-red-500 hover:bg-red-400 text-white m-2 text-sm sm:text-base md:text-base rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1"
        onClick={handleStop}
        disabled={!isRunning}
      >
        정지
      </button>
      <button
        className="bg-gray-600 text-white ml-2 text-sm sm:text-base md:text-base rounded-lg px-2 md:px-8 py-2 md:py-4 text-center col-span-2 md:col-span-1 hover:bg-gray-500"
        onClick={handleReset}
      >
        초기화
      </button>
    </div>
  );
};

export default Timer;
