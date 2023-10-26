import React from "react";

function Spinner({ className }) {
  // return <div>Spinning..</div>;
  return (
    <div
      className={`w-full h-[300px] flex justify-center items-center ${className}`}
    >
      <span className="loading loading-spinner loading-lg "></span>
    </div>
  );
}

export default Spinner;
