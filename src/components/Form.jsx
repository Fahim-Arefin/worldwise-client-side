// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useUrlGeoPosition from "../hooks/use-UrlGeoPosition";
import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCities from "../hooks/use-Cities";

function Form() {
  function convertToEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  const navigate = useNavigate();
  const Base_Url = "https://api.bigdatacloud.net/data/reverse-geocode-client";

  //waring input fields
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");

  //hook
  const [mapLat, mapLng] = useUrlGeoPosition();

  //other state
  const [country, setCountry] = useState({});
  const [isCountryLoading, setIsCountryLoading] = useState(false);
  const [countryError, setCountryError] = useState("");
  const [emoji, setEmoji] = useState("");

  const { createCity, isLoading } = useCities();

  useEffect(() => {
    if (!mapLat && !mapLng) {
      return;
    }

    async function fetchCountryUsingUrlLatLng() {
      try {
        setIsCountryLoading(true);
        setCountryError("");
        const res = await fetch(
          `${Base_Url}?latitude=${mapLat}&longitude=${mapLng}`
        );
        const data = await res.json();
        console.log(data);
        if (!data.countryCode) {
          throw new Error("please Click to valid place ");
        }
        setCityName(data.locality || data.cityName || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        setCountryError(error.message);
      } finally {
        setIsCountryLoading(false);
      }
    }
    fetchCountryUsingUrlLatLng();
  }, [mapLat, mapLng]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cityName && !date) {
      return;
    }

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat: mapLat,
        lng: mapLng,
      },
    };
    await createCity(newCity);
    navigate("/app/cities");
  };

  if (isCountryLoading) {
    return <Spinner />;
  }
  if (!mapLat && !mapLng) {
    return <ErrorMessage message="Start by clicking on the map &rarr;" />;
  }

  return (
    <>
      {countryError ? (
        <ErrorMessage message={countryError} />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#42484d] px-10 py-8 space-y-6 w-full rounded-lg "
        >
          <div className="flex flex-col items-start">
            <label className="font-semibold mb-1" htmlFor="cityName">
              City name
            </label>
            <input
              id="cityName"
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
              className="w-full px-4 py-2 rounded-lg outline-none text-[#2d3439]"
            />
            <span className="m-0">{emoji}</span>
          </div>
          <div className=" flex flex-col items-start">
            <label className="font-semibold mb-1" htmlFor="date">
              When did you go to {cityName}?
            </label>
            {/* <input
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="w-full px-4 py-2 rounded-lg outline-none text-[#2d3439]"
            /> */}
            {/* install and read doc */}
            <DatePicker
              id="date"
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="Pp"
              className="min-w-[400px] flex-1 px-4 py-2 rounded-lg outline-none text-[#2d3439]"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="font-semibold mb-1" htmlFor="notes">
              Notes about your trip to {cityName}
            </label>
            <textarea
              required
              id="notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              className="w-full h-24 px-4 py-2 rounded-lg outline-none text-[#2d3439]"
            />
          </div>

          <div className="flex justify-between">
            <Button
              success
              className={`px-8 rounded-md shadow-none bg-none ${
                isLoading ? "pointer-events-none" : ""
              }`}
            >
              {isLoading ? "loading..." : "Add"}
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              secondary
            >
              &larr; Back
            </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default Form;

// navigate(-1) will go back 1 state
