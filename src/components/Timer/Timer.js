import React from "react";
import styled from 'styled-components/macro';
import Icon from '../Icon'
import Button from "../Button";
import ButtonWrapper from "../ButtonWrapper";

const Timer = (props) => {

    return (
        <Wrapper>
            <Label>{props.timerLabel}</Label>
            <TimeLeft>{props.timerValue}</TimeLeft>
            <ButtonWrapper>
                <Button onClick={props.toggleTimer}>
                    <Icon id='power' strokeWidth={2.5} size={22}></Icon></Button>
                <Button onClick={props.handleReset}>
                    <Icon id='refresh-cw' strokeWidth={2.5} size={22}></Icon>
                </Button>
            </ButtonWrapper>
            <audio id='beep' src="https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3" />

        </Wrapper>
    )
}

const Wrapper = styled.div`
font-size: 35px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius:20px;
`
const TimeLeft = styled.time`
font-size: ${48 / 16}rem;
font-style: normal;
`
const Label = styled.label`
font-size: ${28 / 16}rem;
margin: 10px;
`

export default Timer;