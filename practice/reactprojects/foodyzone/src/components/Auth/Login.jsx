import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "password") {
      setError("");
      localStorage.setItem("auth", true);
      navigate("/home");
    } else if (username === "" || password === "") {
      setError("Username & Password is required!");
    } else {
      setError("Invalid Credentials!");
    }
  };

  return (
    <Body>
      <Form onSubmit={handleLogin}>
        <Box>
          <img src="/Foody Zone.svg" alt="logo" />

          <div className="username">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="error">
            <p>{error}</p>
          </div>
          <button type="submit">Login</button>
        </Box>
      </Form>
    </Body>
  );
};

export default Login;

const Body = styled.div`
  background-color: #383737;
`;

const Box = styled.div`
  height: 300px;
  background-color: #4d4d52;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: auto;
  font-size: 24px;

  .username {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: full;
    align-items: left;
    color: white;
  }
  .password {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: full;
    align-items: left;
    color: white;
  }

  input {
    width: 400px;
    padding: 8px;
    border-radius: 10px;
    border: 1px solid black;
    color: black;
    font-size: 20px;
  }

  .error {
    font-size: 18px;
    color: hsl(62.97297297297298, 89.51612903225805%, 51.37254901960784%);
  }

  button {
    width: 50%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 8px;
    background-color: #292cd0;
    color: white;
    font-size: 24px;
    cursor: pointer;
    outline: none;
    border: transparent;
  }

  button:hover {
    background-color: #201350;
  }
`;
