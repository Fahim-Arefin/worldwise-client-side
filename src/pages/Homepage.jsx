import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

function Homepage() {
  const style = {
    backgroundImage:
      'linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url("/bg.jpg")',
  };

  return (
    <div
      style={style}
      className="min-h-screen bg-center bg-cover flex flex-col"
    >
      <PageNav className="mt-12" />
      <section className="flex justify-center  mt-[12%]">
        <div className="text-center space-y-8">
          <h1 className="text-4xl text-white font-semibold">
            You Travel the world
            <br />
            WorldWise keeps track of your advanture
          </h1>
          <h2 className="text-xl w-[70%] mx-auto text-white opacity-60">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </h2>
          {/* <div className="bg-[#00c46a] p-2 w-56 mx-auto rounded-lg">
          </div> */}
          <Button
            success
            className="bg-[#00c46a] mx-auto rounded-lg shadow-none"
          >
            <Link className="text-[#242a2e] font-semibold" to="/login">
              START TRACKING NOW
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
