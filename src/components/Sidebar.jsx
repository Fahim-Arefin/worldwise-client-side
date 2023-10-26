import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import AppNav from "./AppNav";

function Sidebar({ className }) {
  return (
    <div
      className={`${className} text-center flex flex-col justify-between text-[#aaa]`}
    >
      <main className="h-[700px] ">
        <Logo className="w-52 mx-auto mt-12" />
        <div className="flex flex-col items-center p-12 space-y-9 ">
          <AppNav className="" />
          <Outlet />
        </div>
      </main>
      <footer className="text-sm pb-6">
        &copy;copyright{new Date().getFullYear()} by worldwise inc.
      </footer>
    </div>
  );
}

export default Sidebar;
