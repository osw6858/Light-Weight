import { Route, Routes } from "react-router-dom";
import ExerciseIndex from "./components/exerciseComponents/ExerciseIndex.tsx";
import Header from "./components/otherComponents/Header.tsx";
import DietIndex from "./components/dietComponents/DietIndex.tsx";
import ExerciseLogs from "./components/exerciseComponents/ExerciseLogs.tsx";

const App = () => {
  return (
    <div className="h-screen  bg-slate-200 overflow-y-auto">
      <Header />
      <Routes>
        <Route path="/" element={<ExerciseIndex />} />
        <Route path="/Lose-Weight" element={<DietIndex />} />
        <Route path="/Logs" element={<ExerciseLogs />} />
      </Routes>
    </div>
  );
};

export default App;
