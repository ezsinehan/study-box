import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let newMinutes = displayMessage ? 24 : 4;
            let newSeconds = 59;

            setSeconds(newSeconds);
            setMinutes(newMinutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, displayMessage]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <div className="message">{displayMessage && <div>Break time! New session starts in:</div>}</div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
