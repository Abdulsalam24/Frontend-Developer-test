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

  if (mobile) {
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "relative";
  }

  console.log(mobile, "mobile");
  const handleMenuRoute = () => {
    setMobile(false);
  };

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
        <div className="fixed pt-24 z-10 bg-black bottom-0 right-0 left-0 top-0 nav h-screen w-full md:hidden">
          <ul className="flex flex-col justify-center items-center gap-10 text-white">
            <li onClick={handleMenuRoute}>Events</li>
            <li onClick={handleMenuRoute}>Museum</li>
            <li onClick={handleMenuRoute}>Arts</li>
            <li onClick={handleMenuRoute}>Gallaries</li>
            <button onClick={handleMenuRoute} className="px-11 py-3">
              Login
            </button>
            <button
              onClick={handleMenuRoute}
              className="bg-white text-[#251A00] shadow-md p-3"
            >
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
