import React from "react";
import { Link } from "react-router-dom";
import { ImgUrl } from "../../../App";

const Art = ({ art }) => (
  <Link to={`/singleArt/${art.id}`}>
    <div className="flex flex-col rounded-tl-[180px] max-w-[380px] rounded-br-[180px] overflow-hidden bg-[#1A1405]">
      <div className="h-[300px]">
        <img
          className="object-cover w-full h-full hover:scale-105"
          src={`${ImgUrl}/${art?.image_id}/full/843,/0/default.jpg`}
          width={300}
          height={200}
          alt={art?.alt_text}
        />
      </div>
      <div className="px-3 pt-3 pb-12 text-[18px] md:text-[24px] ">
        <p className="font-extrabold mb-3 md:mb-[31px]">{art.title}</p>
        <p className="text-[12px]">{art.artist_display}</p>
      </div>
    </div>
  </Link>
);

export default Art;
