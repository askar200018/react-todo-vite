import { Button } from '@mui/material';
import React, { useState } from 'react';

export function Timer() {
  const [timer, setTimer] = useState(0);
  const [intervalID, setIntervalID] = useState(0);

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setIntervalID(id);
    // Complete this function
  };
  const stopTimer = () => {
    clearInterval(intervalID);
    // Complete this function
  };
  const resetTimer = () => {
    clearInterval(intervalID);
    setTimer(0);
    // Complete this function
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <span> 0 mins </span>
      <span> {timer} secs</span>
      <div className="flex gap-x-2">
        <Button variant="contained" color="success" onClick={startTimer}>
          Start
        </Button>
        <Button variant="contained" onClick={stopTimer}>
          Stop
        </Button>
        <Button variant="contained" color="error" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  );
}
