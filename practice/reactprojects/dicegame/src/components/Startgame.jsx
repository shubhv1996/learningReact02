import React, { useState } from "react";
import styled from "styled-components";

const Startgame = ({setStart}) => {


  return (
    <Main>
      <ImageContainer>
        <Image src="/dices 1.png" alt="" />
      </ImageContainer>
      <div className="side">
        <Heading>DICE GAME</Heading>
        <Button className="btn" 
        onClick={setStart}>Play Now</Button>
      </div>
    </Main>
  );
};

export default Startgame;

const Image = styled.img``;

const ImageContainer = styled.div`
  width: 50%;
`;

const Main = styled.div`
  width: 1280px;
  display: flex;
  align-items: center;
  height: 100vh;
  /* display: none; */

  .side {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: end;
  }
`;

const Heading = styled.h1`
  font-size: 96px;
  margin: 0;
`;
const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 8px;
  width: fit-content;
  cursor: pointer;
  border: transparent;
  width: 220px;
`;
