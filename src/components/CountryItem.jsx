import React from "react";

function CountryItem({ city }) {
  return (
    <div className="bg-[#42484d] py-4 px-8 w-44 rounded-lg border-l-8 border-[#ffb545]">
      <div>{city.emoji}</div>
      <div>{city.country}</div>
    </div>
  );
}

export default CountryItem;
