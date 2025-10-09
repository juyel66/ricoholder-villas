import { Link, NavLink, useLocation } from "react-router-dom";
import { LiaCoinsSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme] = useState(() => localStorage.getItem("theme") || "yellow");
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 text-[14px] font-semibold text-black ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
          to="/"

        >
          Home
        </NavLink>
      </li>

      {/* Collection Dropdown */}
      <li className="relative flex items-center">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 px-3 py-2 text-[14px] font-semibold text-black"
        >
          Collection{" "}
          <IoMdArrowDropdown
            className={`text-lg mt-[2px] transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        {isDropdownOpen && (
          <ul className="absolute top-full left-0 mt-2 z-10 menu p-2 shadow bg-white rounded-box w-40">
            <li>
              <Link
                className={`block px-3 py-2 text-[14px] font-semibold text-black hover:bg-gray-100 transition-all ${
                  location.pathname === "/rents"
                    ? "border-b-2 border-green-500"
                    : ""
                }`}
                to="/rents"
              >
                Rents
              </Link>
            </li>
            <li>
              <Link
                className={`block px-3 py-2 text-[14px] font-semibold text-black hover:bg-gray-100 transition-all ${
                  location.pathname === "/sales"
                    ? "border-b-2 border-green-500"
                    : ""
                }`}
                to="/sales"
              >
                Sales
              </Link>
            </li>
          </ul>
        )}
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 text-[14px] font-semibold text-black ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
          to="/list-with-us"
        >
          List With Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 text-[14px] font-semibold text-black ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
          to="/management"
        >
          Management
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 text-[14px] font-semibold text-black ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
          to="/concierge"
        >
          Concierge
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 text-[14px] font-semibold text-black ${
              isActive ? "border-b-2 border-green-500" : ""
            }`
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar flex items-center justify-between py-2 px-4">
        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-4">
    
          <img className="h-20" src="public/images/logo.png" alt="" />

          {/* Mobile menu */}
          <div className="dropdown lg:hidden flex items-center">
            <div tabIndex={0} role="button" className="btn btn-ghost flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              {links}
              <a className="btn btn-sm mt-2">Log Out</a>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <ul className="flex gap-4 items-center">{links}</ul>
        </div>

        {/* Right Side */}

        <div className="btn text-white w-[150px] bg-[#009689] h-13 rounded-xl">Contact Us</div>
      
      </div>
    </div>
  );
};

export default Navbar;
