import React from "react";
import Timer from '../Timer'
import Header from "../Header";
import styled from 'styled-components/macro';

const App = () => {
  return(
    <Wrapper>
      <Header title="Pomodoro Clock" />
     <Timer/>
     </Wrapper>
  )
};

const Wrapper = styled.div`
  width: fit-content;
  margin: 30px;
  padding: 45px 20px;
  background-color: #3a7865;
  border-radius: 10px;
`;
export default App;