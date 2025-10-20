import { Link, NavLink, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [theme] = useState(() => localStorage.getItem("theme") || "yellow");
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 text-[15px] font-semibold ${
            isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-800"
          } hover:text-teal-600 transition-all`
        }
        to="/"
      >
        Home
      </NavLink>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 px-3 py-2 text-[15px] font-semibold text-gray-800 hover:text-teal-600 transition-all"
        >
          Collection
          <IoMdArrowDropdown
            className={`text-lg mt-[2px] transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180 text-teal-600" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-44 z-20 border border-gray-100">
            <Link
              to="/rents"
              className={`block px-4 py-2 text-sm font-semibold ${
                location.pathname === "/rents" ? "text-teal-600" : "text-gray-800"
              } hover:bg-gray-100 rounded-md`}
            >
              Rentals
            </Link>
            <Link
              to="/sales"
              className={`block px-4 py-2 text-sm font-semibold ${
                location.pathname === "/sales" ? "text-teal-600" : "text-gray-800"
              } hover:bg-gray-100 rounded-md`}
            >
              Sales
            </Link>
          </div>
        )}
      </div>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 text-[15px] font-semibold ${
            isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-800"
          } hover:text-teal-600 transition-all`
        }
        to="/list-with-us"
      >
        List With Us
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 text-[15px] font-semibold ${
            isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-800"
          } hover:text-teal-600 transition-all`
        }
        to="/management"
      >
        Management
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 text-[15px] font-semibold ${
            isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-800"
          } hover:text-teal-600 transition-all`
        }
        to="/concierge"
      >
        Concierge
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 text-[15px] font-semibold ${
            isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-800"
          } hover:text-teal-600 transition-all`
        }
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-3 py-2 text-[15px] md:hidden font-semibold ${
            isActive ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-800"
          } hover:text-teal-600 transition-all`
        }
        to="https://ricoholder-dashboard.netlify.app/admin-dashboard"
      >
        Dashboard
      </NavLink>
    </>
  );

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className=" px-4 container mx-auto  flex justify-between items-center h-20">
       {/* Logo for large devices only (above 1280px) */}
<Link to="/" className="hidden xl:flex items-center gap-2">
  <img
    className="h-16"
    src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760303130/hd_svg_logo_1_rfsh4e.png"
    alt="Logo"
  />
</Link>

{/* Logo for small, medium, and up to 1279px (including 1050px) */}
<Link to="/" className="flex xl:hidden items-center gap-2">
  <img
    className="h-16"
    src="https://res.cloudinary.com/dqkczdjjs/image/upload/v1760828543/hd_svg_logo_2_hw4vsa.png"
    alt="Logo"
  />
</Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">{links}</div>

        {/* Contact & Login Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="px-6 py-2.5 border-2 border-[#009689] text-black font-semibold rounded-lg shadow-md hover:text-white hover:bg-[#007c74] transition-all"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="px-6 py-2.5 bg-[#009689] text-white font-semibold rounded-lg shadow-md hover:bg-[#007c74] transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl text-gray-700">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        } bg-white shadow-md border-t border-gray-100`}
      >
        <div className="flex flex-col px-4 space-y-3">{links}</div>
        <div className="flex flex-col px-4 space-y-2 mt-3">
          <Link
            to="/contact"
            className="w-full bg-[#009689] text-center text-white px-4 py-2.5 rounded-lg font-semibold shadow-md hover:bg-[#007c74] transition-all"
          >
            Contact Us
          </Link>
          <Link
            to="/login"
            className="w-full bg-[#009689] text-center text-white px-4 py-2.5 rounded-lg font-semibold shadow-md hover:bg-[#007c74] transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
