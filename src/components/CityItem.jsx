import React from "react";
import { Link } from "react-router-dom";
import useCities from "../hooks/use-Cities";

function CityItem({ city }) {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  const { currentCity, deleteCity } = useCities();

  const handleClick = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    deleteCity(city._id);
  };

  return (
    <Link to={`${city._id}?lat=${city.position.lat}&lng=${city.position.lng}`}>
      {/* 
          Passing id to the URL
          and also query string to the url
          hit the route cities/:id with query string
      */}
      <div
        className={`mb-4 bg-[#42484d] p-2 rounded-lg border-l-8  border-[#00c46a]
        flex flex-col md:flex-row justify-around items-center cursor-pointer ${
          currentCity._id === city._id ? "border-2" : ""
        }`}
      >
        <div className="flex w-full md:w-20 justify-center md:justify-between">
          <div>{city.emoji}</div>
          <div className="ml-4">{city.cityName}</div>
        </div>
        <div className="flex justify-between w-[250px] items-center">
          <div>{formatDate(city.date)}</div>
          <div
            onClick={handleClick}
            className="py-1 px-3 rounded-full bg-[#2d3439] cursor-pointer hover:bg-[#ffb545] active:bg-[#ab7729] hover:text-black"
          >
            x
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CityItem;
