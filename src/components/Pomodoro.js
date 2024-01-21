import React, { useState, useEffect } from "react";
import "../styles/Pomodoro.css"; 
import alarmSound from "../components/button-sound.mp3";


export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [currentTimer, setCurrentTimer] = useState("focus");
  const [playAlarm, setPlayAlarm] = useState(false);


  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes === 0) {
            setIsRunning(false);
          } else {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes]);


  useEffect(() => {
    if (playAlarm) {
      const audio = new Audio(alarmSound);
      audio.play();
  
      setTimeout(() => {
        setPlayAlarm(false);
      }, 5000); // Adjust the timeout accordingly
    }
  }, [playAlarm]);


  const progressBarSize = 240; 
  const radius = progressBarSize / 2;
  const strokeDasharray = 2 * Math.PI * radius;

  const handlePauseResume = () => {
    setIsRunning(!isRunning);
  };

  const handleFocusDurationChange = (e) => {
    const newDuration = Math.max(1, Number(e.target.value));
    setFocusDuration(newDuration || "");
  };

  const handleShortBreakDurationChange = (e) => {
    const newDuration = Math.max(1, Number(e.target.value));
    setShortBreakDuration(newDuration || "");
  };

  const handleLongBreakDurationChange = (e) => {
    const newDuration = Math.max(1, Number(e.target.value));
    setLongBreakDuration(newDuration || "");
  };

  const handleStart = (duration, mode) => {
    setMinutes(duration);
    setSeconds(0);
    setIsRunning(true);
    setCurrentTimer(mode);
  };

  const getCurrentDuration = () => {
    switch (currentTimer) {
      case "focus":
        return focusDuration * 60;
      case "shortBreak":
        return shortBreakDuration * 60;
      case "longBreak":
        return longBreakDuration * 60;
      default:
        return 0;
    }
  };
  const currentDuration = getCurrentDuration();
  const elapsed = currentDuration - minutes * 60 - seconds;
  const strokeDashoffset =
    strokeDasharray - (elapsed / currentDuration) * strokeDasharray;

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <h1>Pomodoro</h1>
      <div className="timer-layout">
        <div className="timer-text">
          {timerMinutes}:{timerSeconds}
        </div>
        <svg width={progressBarSize} height={progressBarSize}>
          <circle
            cx={radius}
            cy={radius}
            r={radius - 10}
            stroke="#ddd"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx={radius}
            cy={radius}
            r={radius - 10}
            stroke="black"
            strokeWidth="10"
            fill="none"
            strokeDasharray={strokeDasharray}
            style={{ strokeDashoffset }}
          />
        </svg>
      </div>{" "}
      <div className="input-field">
        <label>Focus Duration (minutes): </label>
        <input
          type="number"
          value={focusDuration}
          onChange={handleFocusDurationChange}
          disabled={isRunning && currentTimer === "focus"} // Disable if focus timer is running
        />
      </div>
      <div className="input-field">
        <label>Short Break Duration (minutes): </label>
        <input
          type="number"
          value={shortBreakDuration}
          onChange={handleShortBreakDurationChange}
          disabled={isRunning && currentTimer === "shortBreak"} // Disable if short break timer is running
        />
      </div>
      <div className="input-field">
        <label>Long Break Duration (minutes): </label>
        <input
          type="number"
          value={longBreakDuration}
          onChange={handleLongBreakDurationChange}
          disabled={isRunning && currentTimer === "longBreak"} // Disable if long break timer is running
        />
      </div>
      <div className="buttons-container">
        <button
          className="btn"
          onClick={() => handleStart(focusDuration, "focus")}
        >
          Focus
        </button>
        <button
          className="btn"
          onClick={() => handleStart(shortBreakDuration, "shortBreak")}
        >
          Break
        </button>
        <button
          className="btn"
          onClick={() => handleStart(longBreakDuration, "longBreak")}
        >
          Long Break
        </button>
        <button className="btn" onClick={handlePauseResume}>
          {isRunning ? "Pause" : "Resume"}
        </button>
      </div>
      <audio id="alarmAudio" src={alarmSound} />
    </div>
  );
}
