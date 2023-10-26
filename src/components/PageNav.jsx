import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav({ className }) {
  return (
    <div
      className={`flex flex-col space-y-10 md:space-y-0 md:flex-row justify-around ${className}`}
    >
      <Logo className=" w-fit mx-auto md:mx-0" />
      <ul
        className={`flex justify-around w-full md:w-[50%] lg:w-[30%] text-white items-center ${styles.nav}`}
      >
        <li>
          <NavLink to="/pricing">PRICING</NavLink>
        </li>
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink
            className="bg-[#00c46a] py-2 px-5 rounded-lg text-[#242a2e] font-semibold"
            to="/login"
          >
            LOGIN
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
