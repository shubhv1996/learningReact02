import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ?  <Outlet /> : <Navigate to="/" />
 
};

export default PrivateRoute;
