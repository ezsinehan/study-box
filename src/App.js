import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cube from "./components/Cube";
import Feynman from "./components/Feynman";
import Pomodoro from "./components/Pomodoro";
import Leitner from "./components/Leitner";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cube />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/feynman" element={<Feynman />} />
          <Route path="/leitner" element={<Leitner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
