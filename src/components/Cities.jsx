import React from "react";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
import useCities from "../hooks/use-Cities";

function Cities() {
  const { cities, isLoading } = useCities();

  return (
    <div className="w-full h-[600px] overflow-y-auto">
      {isLoading ? (
        <Spinner />
      ) : cities.length ? (
        cities.map((city) => <CityItem city={city} key={city._id} />)
      ) : (
        "please add cities by clicking on the map"
      )}
    </div>
  );
}

export default Cities;
