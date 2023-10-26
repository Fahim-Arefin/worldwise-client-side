import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav({ className }) {
  return (
    <div className={`${styles.nav} ${className} `}>
      <ul className="flex w-min rounded-lg">
        <li className="">
          <NavLink
            className=" border-2 border-[#42484d] rounded-l-lg bg-[#42484d] p-2 "
            to="cities"
          >
            CITIES
          </NavLink>
        </li>
        <li>
          <NavLink
            className="border-2 border-[#42484d] rounded-r-lg bg-[#42484d] p-2 "
            to="countries"
          >
            COUNTRIES
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
