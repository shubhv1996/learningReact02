import React, { useState } from "react";
import styled from "styled-components";
import { useFood } from "../FoodContext";
import {useNavigate} from 'react-router'

const TopSection = () => {
  const buttonArray = [
    {
      type: "All",
      key: "all",
    },
    {
      type: "Breakfast",
      key: "breakfast",
    },
    {
      type: "Lunch",
      key: "lunch",
    },
    {
      type: "Dinner",
      key: "dinner",
    },
  ];

  const {searchData, filterFood, selected} = useFood();
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("auth")
    navigate("/")
  }

  return (
    <Navbar>
      <TopContainer>
        <img src="./Foody Zone.svg" alt="log" />
        <div className="top_right">
          <input
            type="text"
            placeholder="Search food...."
            className="search-box"
            onChange={searchData}
          />
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </TopContainer>
      <ButtonContainer>
        {buttonArray?.map(({ type, key }) => (
          <Button
            key={key}
            onClick={() => filterFood(type)}
            isSelected={selected === type}
          >
            {type}
          </Button>
        ))}
      </ButtonContainer>
    </Navbar>
  );
};

export default TopSection;

const Navbar = styled.div`
  background-color: #413f3f;
  padding: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #413f3f;

  .top_right {
    display: flex;
    gap: 10px;
  }

  .search-box {
    background-color: #262525;
    color: white;
    border: transparent;
    padding: 4px;
    border-radius: 8px;

    &::placeholder {
      color: #969393;
    }
  }
`;
export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border: transparent;
  &:hover {
    background-color: #810303;
  }

  background-color: ${(props) => (props.isSelected ? "#810303" : "red")};
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 20px 0;
  background-color: #413f3f;
`;
