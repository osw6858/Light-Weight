import { useSelector } from 'react-redux';
import {RootState} from './reducer/index'

function App() {

  const exercise = useSelector((state:RootState) => state.ExerciseReducer);

  return (
   <div>
    <input></input>
   </div>
  )
}

export default App
