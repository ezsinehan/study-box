import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cube from "./components/Cube";
import Feynman from "./components/Feynman";
import Pomodoro from "./components/Pomodoro";
import Leitner from "./components/Leitner";
import Secondbrain from "./components/Secondbrain";
import Binauralbeats from "./components/Binuralbeats";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/" className="title-link">
            Studybox
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Cube />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/feynman" element={<Feynman />} />
          <Route path="/flashcards" element={<Leitner />} />
          <Route path="/secondbrain" element={<Secondbrain />} />
          <Route path="/binauralbeats" element={<Binauralbeats />} />
        </Routes>
        <footer className="footer">
          <a
            href="https://github.com/ezsinehan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our GitHub
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
