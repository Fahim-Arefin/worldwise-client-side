import React from "react";
import Button from "./Button";
import useAuth from "../hooks/use-Auth";
import { useNavigate } from "react-router-dom";

function User({ className }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      className={`${className} bg-[#242a2e] text-white flex justify-between items-center p-4
       text-sm min-w-[300px] rounded-lg`}
    >
      <img className="w-9 rounded-full" src="/Dp.jpg" alt="" />
      <h1>Welcome,{user.name}</h1>
      {/* <span className="bg-[#42484d] px-4 py-2 rounded-lg cursor-pointer">
        LOGOUT
      </span> */}
      <Button
        danger
        outline
        className="px-4 py-2 rounded-lg cursor-pointer shadow-none font-semibold"
        onClick={handleClick}
      >
        LOGOUT
      </Button>
    </div>
  );
}

export default User;
