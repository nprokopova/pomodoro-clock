import React from "react";
import styled from 'styled-components/macro';
import Icon from '../Icon'
import IconWrapper from "../IconWrapper";
import ButtonWrapper from "../ButtonWrapper";

const Timer = (props) => {

    return (
        <Wrapper>
            <Label>{props.timerLabel}</Label>
            <TimeLeft>{props.timerValue}</TimeLeft>
            <ButtonWrapper>
                <IconWrapper onClick={props.toggleTimer}>
                <Icon id='power'></Icon></IconWrapper>
                <IconWrapper onClick={props.handleReset}>
                <Icon id='refresh-cw'></Icon>
                </IconWrapper>
            </ButtonWrapper>
            <audio id='beep' src="https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3" />
            <Footer>by Nikol Prokopova</Footer>
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

const Footer = styled.footer`
font-size: ${12/16}rem;
margin-top: 10px;
font-weight: 600;
color: #783A4D;
`
const TimeLeft = styled.time`
font-size: ${48/16}rem;

font-style: normal;
`
const Label = styled.label`

font-size: ${28/16}rem;
margin: 10px;


`

export default Timer;