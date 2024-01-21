import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cube.css";

const Cube = () => {
  const navigate = useNavigate();
  const [activeFace, setActiveFace] = useState("show-front");

  const isFaceActive = (face) => {
    return activeFace === `show-${face}`;
  };

  const isButtonActive = (faceName) => {
    return activeFace === `show-${faceName}`;
  };

  return (
    <div>
      <div className="cube-container">
        <div className="scene">
          <div className={`cube ${activeFace}`}>
            <div
              className="cube__face cube__face--front"
              onClick={() => navigate("/")}
            >
              {isFaceActive("front") && "Studybox"}
            </div>
            <div
              className="cube__face cube__face--back"
              onClick={() => navigate("/Feynman")}
            >
              {isFaceActive("back") && "Feynman"}
            </div>
            <div
              className="cube__face cube__face--right"
              onClick={() => navigate("/Leitner")}
            >
              {isFaceActive("right") && "Leitner"}
            </div>
            <div
              className="cube__face cube__face--left"
              onClick={() => navigate("/Pomodoro")}
            >
              {isFaceActive("left") && "Pomodoro"}
            </div>
            <div
              className="cube__face cube__face--top"
              onClick={() => navigate("/SecondBrain")}
            >
              {isFaceActive("top") && "SecondBrain"}
            </div>
            <div
              className="cube__face cube__face--bottom"
              onClick={() => navigate("/binauralbeats")}
            >
              {isFaceActive("bottom") && "Binuralbeats"}
            </div>
          </div>
        </div>
        <div className="cube-controls">
          <button
            className={isButtonActive("front") ? "active" : ""}
            onClick={() => setActiveFace("show-front")}
          >
            Studybox
          </button>
          <button
            className={isButtonActive("back") ? "active" : ""}
            onClick={() => setActiveFace("show-back")}
          >
            Feynman
          </button>
          <button
            className={isButtonActive("right") ? "active" : ""}
            onClick={() => setActiveFace("show-right")}
          >
            Leitner
          </button>
          <button
            className={isButtonActive("left") ? "active" : ""}
            onClick={() => setActiveFace("show-left")}
          >
            Pomodoro
          </button>
          <button
            className={isButtonActive("top") ? "active" : ""}
            onClick={() => setActiveFace("show-top")}
          >
            SecondBrain
          </button>
          <button
            className={isButtonActive("bottom") ? "active" : ""}
            onClick={() => setActiveFace("show-bottom")}
          >
            Binuralbeats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cube;
