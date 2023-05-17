import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArtCollection,
  searchCollection,
} from "../../../redux/actions/artCollection";
import { ReactComponent as BlackArrowIcon } from "../../../assets/icon/blackArrowIcon.svg";
import Loader from "../../Loader";
import searchIcon from "../../../assets/icon/searchIcon.svg";
import Art from "./Art";

const ArtCollection = () => {
  const dispatch = useDispatch();

  const { artCollection } = useSelector((state) => state.artCollection);
  const { isLoading, isError } = useSelector((state) => state.loadingAndError);
  const handleSearch = (e) => {
    const { value } = e.target;
    dispatch(searchCollection(value));
  };

  useEffect(() => {
    dispatch(getArtCollection());
  }, []);

  return (
    <section className="relative">
      <div className="flex flex-col gap-10 items-start justify-between md:flex-row">
        <div className="md:w-1/2">
          <h3>Art in the collection</h3>
          <p className="mt-2">
            Browse a curated selection of art around the world, including museum
            exhibitions, gallery openings, upcoming and many more
          </p>
        </div>
        <div className="w-full md:w-[35%]">
          <div className="w-full relative">
            <img
              className="absolute top-3 left-4"
              src={searchIcon}
              alt="search Icon"
            />
            <input
              className="w-full rounded-lg bg-[#1A1405] text-[#DF9C00] py-4 px-14"
              type="text"
              placeholder="search"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className="my-20 text-center">
          <p>{isError}</p>
        </div>
      ) : artCollection.length === 0 ? (
        <div className="my-20 text-center">
          <h3>Art not found</h3>
        </div>
      ) : (
        <div className="mt-10 outline-red-900 grid  grid-cols-new4 gap-10 justify-center">
          {artCollection?.map((art) => (
            <Art key={art.id} art={art} />
          ))}
        </div>
      )}

      <div className="mt-52 mb-28 flex justify-center">
        <button className="bg-white gap-3 flex items-center px-5 shadow-md">
          <span>Explore more</span>
          <BlackArrowIcon />
        </button>
      </div>
    </section>
  );
};

export default ArtCollection;
