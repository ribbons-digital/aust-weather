import React from "react";

const Dropdown = (data) => {
  const { cities } = data.cities;
  const { selectedCity, setSelectedCity } = data;

  const renderCities = cities.map((city) => {
    return (
      <div
        className="dropdown-item"
        key={city.id}
        onClick={(e) => {
          setSelectedCity(city);
        }}
      >
        {city.name}
      </div>
    );
  });

  // console.log(data);
  return (
    <div className="">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select a city
      </button>
      <div className="dropdown-menu">{renderCities}</div>
    </div>
  );
};

export default Dropdown;
