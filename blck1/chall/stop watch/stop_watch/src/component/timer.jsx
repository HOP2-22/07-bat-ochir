import App from "../App.css";
import React, { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [secund, setSecund] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
      if (seconds >= 60) {
        setMin(min + 1);
        setSeconds(0);
      }
      if (min >= 60) {
        setMin(hour + 1);
        setMin(0);
      }
      return () => clearInterval(interval);
    }
  }, [seconds, start]);
  const reset = () => {
    setHour(0);
    setMin(0);
    setSeconds(0);
  };
  return (
    <div className="big">
      <div className="date">
        <div className="timer">{hour}:</div>
        <div className="timer">{min}:</div>
        <div className="timer">{seconds}</div>
      </div>
      <div className="bttns">
        <div className="bttn1" onClick={() => setStart(true)}>
          start
        </div>
        <div className="bttn2" onClick={() => setStart(false)}>
          stop
        </div>
        <div className="bttn3" onClick={reset}>
          reset
        </div>
      </div>
    </div>
  );
}

export default Timer;
