import React, { useState } from "react";
import "../styles/styles.css";

import Dropdown from "./Dropdown";

import cities from "../data/openWeather/cities.json";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const renderSelectedCity = () => {
    console.log(selectedCity);
    if (!selectedCity) {
      return <div></div>;
    }
    return <div className="">{selectedCity.name}</div>;
  };

  // console.log(selectedCity);

  return (
    <div className="App">
      <Dropdown
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {renderSelectedCity()}
    </div>
  );
}

export default App;
