import React, { useState } from 'react'
import styled from 'styled-components';

const Topsection = ({score,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {


  const numbers = [1,2,3,4,5,6]

  

  return (
    <div>
      <Top>
        <div className="score-container">
          <h1 className="score">{score}</h1>
          <p className="score-text">Total Score</p>
        </div>
        <NumSection>
          <p className='error'>{error}</p>
          <Numselectors>
            {numbers.map((value, i) => (<Button
            key={i}
            isSelected = {value === selectedNumber}
            onClick={() => setSelectedNumber(value)}
            >{value}</Button>))}
          </Numselectors>
          <p className="select-number-text">Select Number</p>
        </NumSection>
      </Top>
    </div>
  );
}

export default Topsection

const Button = styled.button`
  border: 1px solid black;
  width: 72px;
  height: 72px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  font-size: 24px;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;

  .score-container {
    display: flex;
    flex-direction: column;
    .score {
      margin: 0;
      font-size: 100px;
    }

    .score-text {
      margin: 0;
      font-size: 24px;
    }
  }
`;
const NumSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .error {
    color: red
  };

  .select-number-text {
    font-weight: 700;
    font-size: 24px;
  }
`;

const Numselectors = styled.div`
  display: flex;
  gap: 4px;
  
`;


