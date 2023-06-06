import { Route, Routes } from "react-router-dom";
import ExerciseIndex from "./components/exerciseComponents/ExerciseIndex";
import Header from "./components/otherComponents/Header";
import DietIndex from "./components/dietComponents/DietIndex";
import ExerciseLogs from "./components/exerciseComponents/ExerciseLogs";

const App = () => {
  return (
    <div className="h-screen  bg-slate-200 overflow-y-auto">
      <Header />
      <Routes>
        <Route path="/Light-Weight/" element={<ExerciseIndex />} />
        <Route path="/Lose-Weight" element={<DietIndex />} />
        <Route path="/Light-Weight/Logs" element={<ExerciseLogs />} />
      </Routes>
    </div>
  );
};

export default App;
