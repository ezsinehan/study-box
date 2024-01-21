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

  const descriptions = {
    Studybox:
      "Studybox is an website system that employs cognitive structuring to categorize and retrieve academic resources efficiently, optimizing your knowledge acquisition process.",
    Feynman:
      "The Feynman Technique leverages didactic pedagogy, simplifying and deconstructing sophisticated subjects into fundamental principles for enhanced cognitive assimilation.",
    Flashcards:
      "Flashcards utilize active recall and spaced repetition, two neurologically beneficial methods, for enhancing the retention of discrete pieces of information.",
    Pomodoro:
      "Pomodoro Technique is a time management methodology that employs fixed interval scheduling, optimizing cognitive performance through structured bursts of focused activity.",
    SecondBrain:
      "Second Brain is a digital information management system, functioning as an external cognitive storage device, facilitating efficient information retrieval and mental clarity.",
    Binauralbeats:
      "Binaural Beats are an auditory processing artifact, stemming from the brain's neural integration of two distinct sound frequencies, which purportedly induces altered states of consciousness.",
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
              {isFaceActive("front") && (
                <div className="face-content">
                  <div className="title">Studybox</div>
                  <div className="description">{descriptions.Studybox}</div>
                </div>
              )}
            </div>
            <div
              className="cube__face cube__face--back"
              onClick={() => navigate("/Feynman")}
            >
              {isFaceActive("back") && (
                <div className="face-content">
                  <div className="title">Feynman</div>
                  <div className="description">{descriptions.Feynman}</div>
                </div>
              )}
            </div>
            <div
              className="cube__face cube__face--right"
              onClick={() => navigate("/Flashcards")}
            >
              {isFaceActive("right") && (
                <div className="face-content">
                  <div className="title">Flashcards</div>
                  <div className="description">{descriptions.Flashcards}</div>
                </div>
              )}
            </div>
            <div
              className="cube__face cube__face--left"
              onClick={() => navigate("/Pomodoro")}
            >
              {isFaceActive("left") && (
                <div className="face-content">
                  <div className="title">Pomodoro</div>
                  <div className="description">{descriptions.Pomodoro}</div>
                </div>
              )}
            </div>
            <div
              className="cube__face cube__face--top"
              onClick={() => navigate("/SecondBrain")}
            >
              {isFaceActive("top") && (
                <div className="face-content">
                  <div className="title">SecondBrain</div>
                  <div className="description">{descriptions.SecondBrain}</div>
                </div>
              )}
            </div>
            <div
              className="cube__face cube__face--bottom"
              onClick={() => navigate("/binauralbeats")}
            >
              {isFaceActive("bottom") && (
                <div className="face-content">
                  <div className="title">Binauralbeats</div>
                  <div className="description">
                    {descriptions.Binauralbeats}
                  </div>
                </div>
              )}
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
            Flashcards
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
