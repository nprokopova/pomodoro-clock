import React from "react";
import styled from 'styled-components/macro';
import Icon from '../Icon'
import IconWrapper from "../IconWrapper";
import ButtonWrapper from "../ButtonWrapper";

const Settings = (props) => {

  return (
    <Wrapper>
      <h1 style={{fontSize: '2.5rem', margin: '0px  0px 15px 0px'}}>Pomodoro Clock</h1>
      <ControlsWrapper>
        <Label id="break-label">Break Length</Label>
        <ButtonWrapper>
          <IconWrapper onClick={props.handleBreakDecrement}>
          <Icon id='chevron-down'></Icon>
          </IconWrapper>
          <DurationVariable>{props.breakValue}</DurationVariable>
          <IconWrapper onClick={props.handleBreakIncrement}>
            <Icon id = 'chevron-up'></Icon></IconWrapper>
        </ButtonWrapper>
      </ControlsWrapper>
      <ControlsWrapper>
        <Label id="session-label">Session Length</Label>
        <ButtonWrapper>
          <IconWrapper onClick={props.handleSessionDecrement}>
            <Icon id='chevron-down'></Icon></IconWrapper>
          <DurationVariable>{props.sessionValue}</DurationVariable>
          <IconWrapper onClick={props.handleSessionIncrement}>
            <Icon id = 'chevron-up'></Icon></IconWrapper>
        </ButtonWrapper>
      </ControlsWrapper>
    </Wrapper>

  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;

`
const ControlsWrapper = styled.div`
  margin: 10px;


`
const Label = styled.label`

font-size: ${20/16}rem;


`
const DurationVariable = styled.var`
font-size: ${22/16}rem;
font-family: inherit;
font-style: normal;
margin: 0px;
padding: 0px;

`

export default Settings;