import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCities from "../hooks/use-Cities";
import Spinner from "./Spinner";

function CityDetails() {
  const { id } = useParams(); //useParams holds all the params in the route
  const { getCity, currentCity, isLoading } = useCities();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await getCity(id);
    };
    fetchData();
  }, [id, getCity]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#42484d] p-8 w-full text-start space-y-6 rounded-lg">
      <div>
        <h2 className="text-xs">CITY NAME</h2>
        <div className="text-white flex">
          <h1> {currentCity.emoji}</h1>
          <h1 className="ml-2 text-lg font-semibold text-[#c8c8c8]">
            {currentCity.cityName?.toUpperCase()}
          </h1>
        </div>
      </div>
      <div>
        <h2 className="text-xs">
          YOU WENT TO {currentCity.cityName?.toUpperCase()}
        </h2>
        <p className="text-lg font-semibold text-[#c8c8c8]">
          {currentCity.date}
        </p>
      </div>
      {currentCity.notes ? (
        <div>
          <h2 className="text-xs">YOUR NOTES</h2>
          <p className="text-lg font-semibold text-[#c8c8c8] ">
            {currentCity.notes}
          </p>
        </div>
      ) : (
        ""
      )}
      <div>
        <h2 className="text-xs">LEARN MORE</h2>
        <a
          className="text-md underline text-[#ffb545]"
          href="https://en.wikipedia.org/wiki/Main_Page"
        >
          Check out {currentCity.cityName} on wikipedia &rarr;
        </a>
      </div>
      <div>
        <button
          onClick={() => navigate(-1)}
          className="border border-[#c8c8c8] px-2 py-1 text-[#c8c8c8] rounded-md
              hover:bg-[#32363a] duration-75 transition-all"
        >
          &larr; Back
        </button>
      </div>
    </div>
  );
}

export default CityDetails;
