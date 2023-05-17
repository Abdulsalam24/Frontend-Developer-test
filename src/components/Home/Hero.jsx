import React from "react";
import heroImg from "../../assets/image/hero-img.svg";
import blackYellowLine from "../../assets/icon/blackYellowLine.svg";
import { ReactComponent as StarIcon } from "../../assets/icon/starIcon.svg";

const Hero = () => (
  <header className="relative py-20 flex flex-col gap-28 items-start justify-between md:flex-row">
    <div className="md:w-1/2">
      <h1 className="md:leading-[72px]">
        Discover amazing art around the
        <span className="text-[#FBAF00]">world</span>
      </h1>
      <p className="my-6 md:my-11 max-w-md">
        Browse a curated selection of art around the world, including museum
        exhibitions, gallery openings, upcoming and many more
      </p>
      <button className="bg-white text-[#251A00] shadow-md px-11">
        Explore arts
      </button>
    </div>
    <div className="md:w-2/5 relative">
      <img
        className="absolute w-[40%] top-10 left-[-5px] md:w-[30%] md:left-[-100px]"
        src={blackYellowLine}
        alt="black Yellow Line"
      />
      <img
        className="w-[90%] mx-auto rounded-bl-[200px] rounded-br-[30px] rounded-tr-[200px] shadow-xl transition-all hover:shadow-sm md:w-full"
        src={heroImg}
        alt="heroImg"
      />
    </div>
    <StarIcon className="absolute bottom-[700px] w-[10%] left-[200px] md:w-full md:bottom-[100px] md:left-[-230px]" />
  </header>
);

export default Hero;
