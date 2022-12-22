import { Outlet } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import Footer from "./HomeFooter";

export const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <HomeNavbar />
      </div>
      <div className="flex-1 max-w-7xl w-full m-auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
