import React, { useState, useEffect } from "react";

const Binauralbeats = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(require("./40Hz-binaural-beats.mp3")));
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isPlaying) {
      audio.play();
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      audio.pause();
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, audio]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Binaural Beats</h2>
      <button className="btn" onClick={togglePlayback}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <p className="texts">
        Prepping Your Mind for {formatTime(elapsedTime)}...
      </p>
    </div>
  );
};

export default Binauralbeats;
