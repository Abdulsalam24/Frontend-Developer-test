import React from "react";
import NavBar from "../components/NavBar";
import yellowLine from "../assets/icon/yellowLine.svg";
import singleYellowLine from "../assets/icon/blackYellowLine-single.svg";

import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const line = pathname.includes("/singleArt/");

  return (
    <main className="relative overflow-hidden">
      <NavBar />

      <div className="container w-11/12 max-w-7xl mx-auto">{children}</div>

      <img
        className={`${!line ? "absolute bottom-[-50px] left--2" : "hidden"}`}
        src={yellowLine}
        alt="yellow Line"
      />
      <img
        className={`${
          line ? "absolute bottom-[-100px] right-[-120px]" : "hidden"
        }`}
        src={singleYellowLine}
        alt="single Yellow Line"
      />
    </main>
  );
};

export default Layout;
