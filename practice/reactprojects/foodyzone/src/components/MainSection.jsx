import React from "react";
import styled from "styled-components";
import { Button } from "./TopSection";
import { useFood } from "../FoodContext";

const MainSection = () => {
  const { filteredData, loading, error, BASE_URL } = useFood();


  return (
    <div>
      <Main>
        {loading || error ? (
          <div className="msg">
            <p>{loading ? "Loading...." : ""}</p>
            <p>{error ? "Server not Found!" : ""}</p>
          </div>
        ) : (
          ""
        )}

        <DishCard>
          {filteredData?.map(({ name, image, text, price }) => (
            <div key={name} className="main-card">
              <div className="food_image">
                <img src={BASE_URL + image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </div>
          ))}
        </DishCard>
      </Main>
    </div>
  );
};

export default MainSection;

const Main = styled.div`
  background-image: url("./bg.png");
  min-height: calc(100vh - 170px);
  margin: 0;
  padding: 0;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;

  .msg {
    background-color: white;
    opacity: 0.6;
    font-size: 36px;
    font-weight: 700;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 8px;
    border-radius: 8px;
  }
`;

const DishCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 1600px;

  .main-card {
    width: 400px;
    background-color: #ffffff;
    display: flex;
    padding: 8px;
    border-radius: 20px;
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }

  .info h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .info p {
    font-size: 15px;
    color: #252525;
  }
`;
