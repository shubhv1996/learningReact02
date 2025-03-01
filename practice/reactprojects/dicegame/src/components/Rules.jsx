import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <Rule>
      <h2>How to play dice game</h2>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>if you get wrong guess then 2 point will be dedcuted </li>
      </ul>
    </Rule>
  );
};

export default Rules;

const Rule = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 0.5;
  background-color: #f9f9ce;
  padding: 4px 8px;
  margin: 12px;

  li {
    line-height: 1;
    margin: 4px;
  }
`;
