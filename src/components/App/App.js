import React from "react";
import { useState } from "react";
import styled from 'styled-components/macro';
import Settings from '../Settings';
import Timer from '../Timer'

const App = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [breakValue, setBreakValue] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [sessionValue, setSessionValue] = useState(25);
    const [timerValue, setTimerValue] = useState('25:00');
    const [timerState, setTimerState] = useState();
    const [currentMinutes, setCurrentMinutes] = useState();
    const [timerInterval, setTimerInterval] = useState();
    const [myTimeout, setMyTimeout] = useState();
    const [timerLabel, setTimerLabel] = useState('Session');

    const handleBreakIncrement = () => {
        if (breakLength < 60 && !timerState) {

            setBreakLength(breakLength + 1);
            setBreakValue(breakLength + 1);
        };
    };
    const handleSessionIncrement = () => {
        let newSession;
        if (sessionLength < 60 && !timerState) {
            newSession = sessionLength + 1;
            setSessionLength(newSession);
            setSessionValue(newSession);
            setTimerValue(`${newSession > 9 ? newSession : '0' + newSession}:00`);
        };

    };
    const handleBreakDecrement = () => {
        if (breakLength > 1 && !timerState) {
            setBreakLength(breakLength - 1);
            setBreakValue(breakLength - 1);
        };
    };
    const handleSessionDecrement = () => {
        let newSession
        if (sessionLength > 1 && !timerState) {
            newSession = sessionLength - 1;
            setSessionLength(newSession);
            setSessionValue(newSession);
            setTimerValue(`${newSession > 9 ? newSession : '0' + newSession}:00`);
        };

    };
    const handleReset = () => {
        setBreakLength(5);
        setSessionLength(25);
        setBreakValue(5);
        setSessionValue(25);
        setTimerValue('25:00');
        setTimerState();
        clearInterval(timerInterval);
        clearTimeout(myTimeout);
        setTimerLabel('Session');
        document.getElementById('beep').pause();
        document.getElementById('beep').src = "https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3";

    };

    const toggleTimer = () => {
        if (!timerState) {
            setTimerState('on');
            CountDown();
            clearInterval(timerInterval);
            clearTimeout(myTimeout);
        }
        if (timerState === 'on') {
            setTimerState('off');
            clearInterval(timerInterval);
            clearTimeout(myTimeout);
            timerLabel === 'Session' ? setSessionLength(currentMinutes) : setBreakLength(currentMinutes);


        } else if (timerState === 'off') {
            setTimerState('on');
            CountDown();
            clearInterval(timerInterval);
            clearTimeout(myTimeout);
        }
    }

    const CountDown = () => {

        let minutes;
        let seconds;

        const sessionCountdown = () => {
            let sessionSeconds = sessionLength * 60;

            let breakSeconds = breakLength * 60;
            if (timerValue === '25:00') { sessionSeconds -= 1 }
            let myInterval = setInterval(() => {
                minutes = Math.floor(sessionSeconds / 60)
                seconds = Math.round((sessionSeconds / 60 - minutes) * 60);
                setTimerLabel('Session');
                setTimerValue(`${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`);
                sessionSeconds -= 1;
                setCurrentMinutes(sessionSeconds / 60);
                setTimerInterval(myInterval);

                if (sessionSeconds === 0) {
                    setTimerValue(`00:00`);
                    document.getElementById('beep').play();
                    let myTimeout = setTimeout(breakCountdown, 1000);

                    setMyTimeout(myTimeout);
                    clearInterval(myInterval);
                }
            }
                , 1000);

        }

        const breakCountdown = () => {


            let breakSeconds = breakLength * 60;
            let myInterval = setInterval(() => {
                minutes = Math.floor(breakSeconds / 60)
                seconds = Math.round((breakSeconds / 60 - minutes) * 60);
                setTimerLabel('Break');
                setTimerValue(`${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`);
                breakSeconds -= 1;

                setCurrentMinutes(breakSeconds / 60);
                setTimerInterval(myInterval);

                if (breakSeconds === 0) {
                    setTimerValue(`00:00`)
                    document.getElementById('beep').play();
                    let myTimeout = setTimeout(sessionCountdown, 1000);

                    setMyTimeout(myTimeout);
                    clearInterval(myInterval);
                }
            }
                , 1000);

        }

        timerLabel === 'Session' ? sessionCountdown() : breakCountdown();
    }

    return (
        <Wrapper>
            <Settings breakValue={breakValue} sessionValue={sessionValue} handleBreakIncrement={handleBreakIncrement} handleSessionIncrement={handleSessionIncrement} handleBreakDecrement={handleBreakDecrement} handleSessionDecrement={handleSessionDecrement} />
            <Timer timerValue={timerValue} toggleTimer={toggleTimer} handleReset={handleReset} timerLabel={timerLabel} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
width: fit-content;
margin: 30px;
padding: 45px 20px;
background-color: #3A7865;
border-radius: 10px;


`
export default App;