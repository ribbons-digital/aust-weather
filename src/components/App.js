import React, { useState, useEffect } from "react";

import "@babel/polyfill";
import "regenerator-runtime/runtime";
import axios from "axios";

import "../styles/styles.css";
const KEY = process.env.OPEN_WEATHER;

import Dropdown from "./Dropdown";
import WeatherData from "./WeatherData";

import getWeather from "../helpers/getWeather";
import cities from "../data/openWeather/cities.json";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = React.useState(null);

  const renderSelectedCity = () => {
    return selectedCity ? (
      <button
        className=""
        onClick={() => getWeather(selectedCity.id, setWeatherData)}
      >
        Submit
      </button>
    ) : null;
  };

  const renderWeatherData = () => {
    return weatherData ? <WeatherData weatherData={weatherData} /> : null;
  };

  useEffect(() => {});

  return (
    <div className="App container-fluid p-4">
      <div className="">
        <p className="h5">Current weather</p>
        <Dropdown
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>
      <div className="mb-3">
        {renderSelectedCity()}
        {renderWeatherData()}
      </div>
    </div>
  );
}

export default App;
