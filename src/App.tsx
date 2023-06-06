import ExerciseIndex from "./components/exerciseComponents/ExerciseIndex";
import Header from "./components/otherComponents/Header";
const App = () => {
  return (
    <div className="h-screen  bg-slate-200 overflow-y-auto">
      <Header />
      <ExerciseIndex />
    </div>
  );
};

export default App;
