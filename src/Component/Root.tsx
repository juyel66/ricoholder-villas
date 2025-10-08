import { Outlet } from "react-router";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className=" pr-6 pl-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
