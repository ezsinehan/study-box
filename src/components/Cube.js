import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cube.css";

const Cube = () => {
  const navigate = useNavigate();
  const [activeFace, setActiveFace] = useState("");

  const isFaceActive = (face) => {
    return activeFace === `show-${face}`;
  };

  const handleFaceClick = (path) => {
    if (isFaceActive(path)) {
      navigate(`/${path}`);
    }
  };

  return (
    <div>
      {/* ... your buttons ... */}
      <div className="scene">
        <div className={`cube ${activeFace}`}>
          <div
            className="cube__face cube__face--front"
            onClick={() => navigate("/Pomodoro")}
          >
            {isFaceActive("front") && "Pomodoro"}
          </div>
          <div className="cube__face cube__face--back">
            {isFaceActive("back") && "Feynman"}{" "}
            {/* Render Feynman on front face */}
          </div>
          <div className="cube__face cube__face--right">
            {isFaceActive("right") && "Leitner"}
          </div>
          <div className="cube__face cube__face--left">
            {isFaceActive("left") && "left"}
          </div>
          <div className="cube__face cube__face--top">
            {isFaceActive("top") && "top"}
          </div>
          <div className="cube__face cube__face--bottom">
            {isFaceActive("bottom") && "bottom"}
          </div>
        </div>
      </div>
      <div className="cube-controls">
        <button onClick={() => setActiveFace("show-front")}>Pomodoro</button>
        <button onClick={() => setActiveFace("show-back")}>Feynman</button>
        <button onClick={() => setActiveFace("show-right")}>Leitner</button>
        <button onClick={() => setActiveFace("show-left")}>Left</button>
        <button onClick={() => setActiveFace("show-top")}>Top</button>
        <button onClick={() => setActiveFace("show-bottom")}>Bottom</button>
      </div>
    </div>
  );
};

export default Cube;
