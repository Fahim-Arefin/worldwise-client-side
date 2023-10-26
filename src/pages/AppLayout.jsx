import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row bg-[#2d3439] ">
      <Sidebar className="w-full 2xl:w-[30%] xl:w-[40%] lg:w-[50%] bg-[#242a2e] " />
      <Map />
      <User className="absolute top-3 right-16 z-30" />
    </div>
  );
}

export default AppLayout;
