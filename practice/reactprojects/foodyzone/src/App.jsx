import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import { FoodProvider } from "./FoodContext";
import Home from "./components/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("All");

  const BASE_URL = "http://localhost:9000";

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const respnse = await fetch(BASE_URL);
        const json = await respnse.json();

        setData(json);
        setFilteredData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const searchData = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") setFilteredData(data);

    const filteredfood = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filteredfood);
  };

  const filterFood = (type) => {
    if (type.toLowerCase() === "all") {
      setFilteredData(data);
      setSelected("All");
      return;
    }

    const filteredfood = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filteredfood);
    setSelected(type);
  };

  return (
    <>
      <FoodProvider
        value={{
          searchData,
          filterFood,
          data,
          selected,
          filteredData,
          loading,
          error,
          BASE_URL,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FoodProvider>
    </>
  );
}

export default App;
