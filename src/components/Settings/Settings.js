import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon";
import Button from "../Button";
import ButtonWrapper from "../ButtonWrapper";

const Settings = (props) => {
  return (
    <Wrapper>
      <ControlsWrapper>
        <Label id="break-label">Break Length</Label>

        <ButtonWrapper>
          <Button onClick={props.handleBreakDecrement}>
            <Icon id="chevron-down" strokeWidth={2.5} size={22} />
          </Button>
          <DurationVariable>{props.breakDisplayValue}</DurationVariable>
          <Button onClick={props.handleBreakIncrement}>
            <Icon id="chevron-up" strokeWidth={2.5} size={22} />
          </Button>
        </ButtonWrapper>
      </ControlsWrapper>

      <ControlsWrapper>
        <Label id="session-label">Session Length</Label>

        <ButtonWrapper>
          <Button onClick={props.handleSessionDecrement}>
            <Icon id="chevron-down" strokeWidth={2.5} size={22}></Icon>
          </Button>
          <DurationVariable>{props.sessionDisplayValue}</DurationVariable>
          <Button onClick={props.handleSessionIncrement}>
            <Icon id="chevron-up" strokeWidth={2.5} size={22}></Icon>
          </Button>
        </ButtonWrapper>
      </ControlsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ControlsWrapper = styled.div`
  margin: 10px;
`;
const Label = styled.label`
  font-size: ${20 / 16}rem;
`;
const DurationVariable = styled.var`
  font-size: ${22 / 16}rem;
  font-family: inherit;
  font-style: normal;
  margin: 0px;
  padding: 0px;
`;

export default Settings;
