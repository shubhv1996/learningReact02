import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Topsection from "./Topsection";
import Rules from "./Rules";

const Gamepage = () => {
  const [score, setScore] = useState(0);
  const [isSelected, setIsSelected] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [number, setNumber] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState("");

  const rollDice = () => {
    if (!isSelected) {
      setError(
        "You have not selected any Number! Please select a Number to continue."
      );
      return;
    }

    const randomNumber = Math.floor(Math.random() * (1, 6) + 1);

    setNumber((prev) => randomNumber);

    const newScore =
      selectedNumber === randomNumber ? score + randomNumber : score - 2;

    setScore((prev) => newScore);

    setSelectedNumber();

    setIsSelected((prev) => !prev);
  };

  const NumSelector = (value) => {
    setSelectedNumber(value);
    setIsSelected(true);
    setError("");
  };

  const toggleRules = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <Main>
      <Topsection
        score={score}
        error={error}
        setSelectedNumber={NumSelector}
        selectedNumber={selectedNumber}
      />
      <div className="dice-sec">
        <img
          src={`/dices/dice_${number}.png`}
          alt="roledice"
          className="dice-img"
          onClick={rollDice}
        />
        <p className="dice-cap">Click on Dice to roll</p>
        <button className="btn" onClick={() => setScore(0)}>
          Reset Score
        </button>
        <button className="show-rules-btn" onClick={toggleRules}>
          {isShown ? "Hide" : "Show"} Rules
        </button>
      </div>
      {isShown && <Rules />}
    </Main>
  );
};

export default Gamepage;

const Main = styled.div`
  .dice-cap {
    font-weight: 600;
    font-size: 24px;
  }

  .dice-sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    button {
      background-color: #1a1a1a;
      color: white;
      padding: 4px;
      width: 120px;
      border-radius: 10px;
      cursor: pointer;
    }

    .show-rules-btn {
      background-color: white;
      color: black;
    }
  }

  .dice-img {
    width: 250px;
    cursor: pointer;
  }
`;
