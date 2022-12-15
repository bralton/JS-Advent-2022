import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NextPage } from "next";

import styles from "./Day1.module.scss";
import gearImage from "./images/gear.svg";
import checkImage from "./images/check.svg";

const Day1: NextPage = () => {
  const [minutes, setMinutes] = useState<number>(1);
  const [seconds, setSeconds] = useState<number>(30);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const [inputDisabled, setInputDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (seconds === 0 && minutes === 0 && timerStarted) {
      stopTimer();
      setTimerFinished(true);
      setTimeout(
        () => alert("Your timer has run out!. Use the cog to reset it."),
        10
      );
    } else if (timerStarted) {
      setTimer(setTimeout(() => countDown(), 1000));
    }
  }, [minutes, seconds]);

  const countDown = (): void => {
    if (seconds === 0 && minutes !== 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  const stopTimer = (): void => {
    clearTimeout(timer);
    setTimer(undefined);
    setTimerStarted(false);
  };

  const startTimer = (): void => {
    if (seconds > 0 || minutes > 0) {
      setTimer(setTimeout(() => countDown(), 1000));
      setTimerStarted(true);
    }
  };

  const toggleInputs = (): void => {
    setTimerFinished(false);
    setInputDisabled(!inputDisabled);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.ring} ${timerFinished ? styles.ending : ""}`}>
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>

      <div className={styles.timer}>
        <div className={styles.time}>
          <div className={styles.minutes}>
            <input
              type="text"
              value={("0" + minutes).slice(-2)}
              onChange={(e) =>
                isNaN(e.target.valueAsNumber)
                  ? setMinutes(Number.parseInt(e.target.value.slice(-2)))
                  : null
              }
              disabled={inputDisabled}
            />
          </div>
          <div className={styles.colon}>:</div>
          <div className={styles.seconds}>
            <input
              type="text"
              value={("0" + seconds).slice(-2)}
              onChange={(e) =>
                isNaN(e.target.valueAsNumber)
                  ? setSeconds(Number.parseInt(e.target.value.slice(-2)))
                  : null
              }
              disabled={inputDisabled}
            />
          </div>
        </div>
        <button
          className={styles.start}
          onClick={() => (timerStarted ? stopTimer() : startTimer())}
          disabled={!inputDisabled}
        >
          {timerStarted ? "stop" : "start"}
        </button>
        <button
          className={styles.settings}
          onClick={() => toggleInputs()}
          disabled={timerStarted}
        >
          <Image src={inputDisabled ? gearImage : checkImage} alt="Settings" />
        </button>
      </div>
    </div>
  );
};

export default Day1;
