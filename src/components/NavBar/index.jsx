import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);

  const handleMenu = () => {
    setMobile((prevState) => !prevState);
  };

  useEffect(() => {
    const scroll = () => {
      if (window.scroll) {
        setMobile(false);
      }
    };

    window.addEventListener("scroll", scroll);
  }, []);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between max-w-7xl px-4 mx-auto py-4">
        <Link to="/" className="cursor-pointer">
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-[50px] text-white">
          <li>Events</li>
          <li>Museum</li>
          <li>Arts</li>
          <li>Gallaries</li>
          <button>Login</button>
          <button className="bg-white text-[#251A00] shadow-md px-6">
            Explore arts
          </button>
        </ul>
        <div
          className="z-20 md:hidden text-3xl text-white"
          onClick={handleMenu}
        >
          {mobile ? <AiOutlineClose /> : <FiMenu />}
        </div>
      </div>

      {mobile ? (
        <div className="fixed pt-24 bottom-0 right-0 left-0 top-0 bg-black nav h-screen w-full">
          <ul className="flex flex-col justify-center items-center gap-10 text-white">
            <li>Events</li>
            <li>Museum</li>
            <li>Arts</li>
            <li>Gallaries</li>
            <button className="px-11 py-3">Login</button>
            <button className="bg-white text-[#251A00] shadow-md p-3">
              Explore arts
            </button>
          </ul>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};

export default NavBar;
