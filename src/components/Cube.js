import React, { useState } from "react";
import "../styles/Cube.css";
import Feynman from './Feynman';

const Cube = () => {
  const [activeFace, setActiveFace] = useState("");

  const isFaceActive = (face) => {
    return activeFace === `show-${face}`;
  };

  return (
    <div>
      {/* ... your buttons ... */}
      <div className="scene">
        <div className={`cube ${activeFace}`}>
          <div className="cube__face cube__face--front">
            {isFaceActive("front") && "front"}
          </div>
          <div className="cube__face cube__face--back">
            {isFaceActive("back") && <Feynman />} {/* Render Feynman on front face */}
          </div>
          <div className="cube__face cube__face--right">
            {isFaceActive("right") && "right"}
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
        <button onClick={() => setActiveFace("show-front")}>Front</button>
        <button onClick={() => setActiveFace("show-back")}>Back</button>
        <button onClick={() => setActiveFace("show-right")}>Right</button>
        <button onClick={() => setActiveFace("show-left")}>Left</button>
        <button onClick={() => setActiveFace("show-top")}>Top</button>
        <button onClick={() => setActiveFace("show-bottom")}>Bottom</button>
      </div>
    </div>
  );
};

export default Cube;
