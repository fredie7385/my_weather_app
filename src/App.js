import React from "react";
import { Search,CurrentWeather } from "./components/components.jsx";
import "./App.css";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather/>
      </div>
    </>
  );
}

export default App;
