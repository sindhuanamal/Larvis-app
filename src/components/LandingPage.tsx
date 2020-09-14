import React from 'react';
import styled from 'styled-components';
import logo from '../images/coffee.png'

function LandingPage() {
  return (
    <>
      <Wrapper>
        Welcome to LARVIS.
      </Wrapper>
      <img src={logo} alt="coffee text"  style={{width: '460px', paddingLeft: '32px'}}/>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  position: relative;
  top: 350px;
  font-weight: 700;
  font-family: Helvetica, sans-serif;
  justify-content: center;
  font-size: 32px;
`;

export default LandingPage;
