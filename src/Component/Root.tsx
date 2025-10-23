import { Outlet } from "react-router";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
