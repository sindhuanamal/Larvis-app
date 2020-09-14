import React from 'react';
import styled from 'styled-components';
import logo from '../images/coffee.png'
import BeverageManager from "./BeverageManager";

function LandingPage() {
  return (
      <Wrapper>
          <img src={logo} alt="coffee text"  style={{width: '460px', padding: '32px 0 0 32px'}}/>
          <Container>
            <WelcomeText>
              Welcome to LARVIS
            </WelcomeText>
            <ButtonContainer>
              <BeverageManagerButton href="/beverageManager">Beverage Manager</BeverageManagerButton>
              <OperatorButton href="/operator">Operator</OperatorButton>
            </ButtonContainer>
          </Container>
      </Wrapper>


  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  position: relative;
  top: 280px;
`;

const WelcomeText = styled.div`
  display: flex;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
  font-size: 32px;
  margin-bottom: 32px;
`;


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

const ButtonLink = styled.a`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  padding: 8px 24px;
  border-radius: 16px;
  font-weight: 500;
  height: 33px;
  font-size: 14px;
  color: #ffffff;

  :hover {
    color: #ffffff;
    text-decoration: none;
  }
`;

const BeverageManagerButton = styled(ButtonLink)`
  background-color: #007DC5;
  margin-right: 16px;
  width: 170px;
  height: 32px;
  border-radius: 16px; 
`;

const OperatorButton = styled(ButtonLink)`
  background-color: #007DC5;
  width: 170px;
  height: 32px;
  border-radius: 16px; 
`;

export default LandingPage;
