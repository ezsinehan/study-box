import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cube from "./components/Cube";
import Feynman from "./components/Feynman";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cube />} />
          <Route path="/front" />
          <Route path="/feynman" element={<Feynman />} />
          {/* Add routes for other cube faces here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
