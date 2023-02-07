import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import Workout from './screens/workout/Workout';
import Exercise from './screens/exercise/Exercise';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts/:program" element={<Workout />} />
            <Route path="/exercises/:part" element={<Exercise />} />
            <Route path="/sponsers" element={<Exercise />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
