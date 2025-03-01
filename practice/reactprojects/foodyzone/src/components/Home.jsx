import React, { useEffect } from "react";
import TopSection from "./TopSection";
import MainSection from "./MainSection";
import { Navigate } from "react-router";

const Home = () => {
  

  return (
    <div>
      <TopSection />
      <MainSection />
    </div>
  );
};

export default Home;
