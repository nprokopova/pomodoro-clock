import React from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import Settings from "../Settings";
import TimerDisplay from "../TimerDisplay";
import Footer from "../Footer";

const Timer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerValue, setTimerValue] = useState("25:00");
  const [timerState, setTimerState] = useState();
  const [currentMinutes, setCurrentMinutes] = useState();
  const [timerInterval, setTimerInterval] = useState();
  const [myTimeout, setMyTimeout] = useState();
  const [timerLabel, setTimerLabel] = useState("Session");

  const handleBreakIncrement = () => {
    if (breakLength < 60 && !timerState) {
      setBreakLength(breakLength + 1);
    }
  };
  const handleSessionIncrement = () => {
    if (sessionLength < 60 && !timerState) {
      setSessionLength(sessionLength + 1);
      setTimerValue(
        `${
          sessionLength + 1 > 9 ? sessionLength + 1 : "0" + (sessionLength + 1)
        }:00`
      );
    }
  };
  const handleBreakDecrement = () => {
    if (breakLength > 1 && !timerState) {
      setBreakLength(breakLength - 1);
    }
  };
  const handleSessionDecrement = () => {
    if (sessionLength > 1 && !timerState) {
      setSessionLength(sessionLength - 1);
      setTimerValue(
        `${
          sessionLength - 1 > 9 ? sessionLength - 1 : "0" + (sessionLength - 1)
        }:00`
      );
    }
  };

  const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.round((seconds / 60 - minutes) * 60);
    return `${minutes > 9 ? minutes : "0" + minutes}:${
      remainingSeconds > 9 ? remainingSeconds : "0" + remainingSeconds
    }`;
  };

  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimerValue("25:00");
    setTimerState();
    clearInterval(timerInterval);
    clearTimeout(myTimeout);
    setTimerLabel("Session");
    document.getElementById("beep").pause();
    document.getElementById("beep").src =
      "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3";
  };

  const toggleTimer = () => {
    if (!timerState) {
      setTimerState("on");
      timer();
    } else if (timerState === "on") {
      setTimerState("pause");
      clearInterval(timerInterval);
      clearTimeout(myTimeout);
    } else if (timerState === "pause") {
      clearInterval(timerInterval);
      clearTimeout(myTimeout);
      setTimerState("on");
      timer("resume");
    }
  };

  const countDown = (minutes, label) => {
    let seconds = minutes * 60;

    const myInterval = setInterval(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
      setTimerInterval(myInterval);
      setTimerLabel(label);
      seconds -= 1;
      setCurrentMinutes(seconds / 60);
      setTimerValue(formatTime(seconds));

      if (seconds === 0) {
        setTimerValue("00:00");
        document.getElementById("beep").play();
        clearInterval(myInterval);
        setTimerInterval();
        let myTimeout = setTimeout(timer("switch", label), 1000);
        setMyTimeout(myTimeout);
      }
    }, 1000);
  };
  const timer = (timerMode, label) => {
    if (!timerMode) {
      countDown(sessionLength, "Session");
    } else if (timerMode === "resume") {
      countDown(currentMinutes, timerLabel);
    } else if (timerMode === "switch" && label === "Session") {
      countDown(breakLength + 1 / 60, "Break");
    } else if (timerMode === "switch" && label === "Break") {
      countDown(sessionLength + 1 / 60, "Session");
    }
  };

  return (
    <Wrapper>
      <Settings
        breakLength={breakLength}
        sessionLength={sessionLength}
        handleBreakIncrement={handleBreakIncrement}
        handleSessionIncrement={handleSessionIncrement}
        handleBreakDecrement={handleBreakDecrement}
        handleSessionDecrement={handleSessionDecrement}
      />
      <TimerDisplay
        timerValue={timerValue}
        toggleTimer={toggleTimer}
        handleReset={handleReset}
        timerLabel={timerLabel}
      />
      <Footer author="Nikol Prokopova" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default Timer;
