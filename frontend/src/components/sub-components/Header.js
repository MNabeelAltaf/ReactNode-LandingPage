import { useState } from "react";
import { FaFacebookF, FaInstagram, FaBehance, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom"; 
import Logo from "./Logo";


const NavLinks = ({ className }) => {
  const links = [
    { name: "Home", dropdown: false },
    { name: "Pages", dropdown: true },
    { name: "Rooms & Suites", dropdown: true },
    { name: "Services", dropdown: true },
    { name: "Blog", dropdown: true },
    { name: "Contact", dropdown: false },
  ];

  return (
    <nav className={className}>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.name === "Home" ? "/about" : "#"}
          className={({ isActive }) =>
            `flex items-center ${
              isActive && link.name === "Home" ? "text-[#e5c466]" : "text-white"
            } hover:text-[#e5c466] transition duration-300 text-lg py-2 lg:text-base ${
              !isActive && link.name !== "Home" ? "text-white" : ""
            }`
          }
        >
          {link.name}
          {link.dropdown && (
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </NavLink>
      ))}
    </nav>
  );
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ContactInfo = ({ text }) => (
    <div className="flex items-center">
      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
      <span>{text}</span>
    </div>
  );

  return (
    <header className="relative shadow-md">
      <div className="bg-[#1f8f6a] text-white">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between sm:items-center text-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-x-4 gap-y-2">
            <ContactInfo text="7631 Sabina Park, 115 Devon Isle, USA" />
            <ContactInfo text="info@domain.com" />
            <ContactInfo text="(+1) 987 654 3210" />
          </div>
          <div className="hidden sm:flex items-center space-x-4 mt-2 sm:mt-0">
            <FaFacebookF className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <FaXTwitter className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <FaInstagram className="w-4 h-4 cursor-pointer hover:opacity-80" />
            <FaBehance className="w-4 h-4 cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      <div className="bg-[#2a2a2a] w-full">
        <div className="flex justify-between items-stretch">
          <div className="flex items-stretch">
            <div
              className="bg-white flex items-center pl-4 pr-12 sm:pr-10 md:px-10"
              style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
            >
              <Logo />
            </div>

            <div className="hidden lg:flex items-center px-8">
              <NavLinks className="flex items-center space-x-8" />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4 py-4 pr-8">
            <button className="flex items-center justify-center w-11 h-11 bg-[#3e3e3e] rounded-full text-white hover:bg-opacity-80 transition-opacity">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <Link
              to="/booking"
              className="bg-[#e5c466] text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition duration-300 whitespace-nowrap flex items-center gap-2"
            >
              Book Your Stay
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="flex-1 lg:hidden flex items-center justify-end pr-4 py-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center justify-center w-11 h-11 bg-[#3e3e3e] rounded-full text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-80 max-w-[90%] h-full bg-[#2a2a2a] shadow-lg p-6 z-50 transform transition-transform duration-300 flex flex-col ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
              <FaTimes size={24} />
            </button>
          </div>
          <NavLinks className="flex flex-col space-y-4" />
          <Link
            to="/booking"
            className="bg-[#e5c466] text-gray-800 font-semibold mt-8 px-6 py-4 rounded-md hover:bg-yellow-500 transition duration-300 w-full flex items-center justify-center gap-2"
          >
            Book Your Stay
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;