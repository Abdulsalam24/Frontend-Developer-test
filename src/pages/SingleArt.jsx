import React, { useEffect } from "react";
import { ReactComponent as ArrowIcon } from "../assets/icon/arrowIcon.svg";
import { ReactComponent as ShareIcon } from "../assets/icon/shareIcon.svg";
import { Link, useParams } from "react-router-dom";
import { ImgUrl } from "../App";
import { getSingleCollection } from "../redux/actions/artCollection";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const SingleArt = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { singleCollection } = useSelector((state) => state.artCollection);
  const { isLoading, isError } = useSelector((state) => state.loadingAndError);

  useEffect(() => {
    dispatch(getSingleCollection(id));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="relative mb-36">
      <div className="flex justify-between mt-36 mb-9">
        <Link to="/">
          <ArrowIcon />
        </Link>
        <ShareIcon />
      </div>

      {isError ? (
        <div className="my-20 text-center">
          <p>{isError}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-28 items-start justify-between md:flex-row">
          <div className="md:w-1/2">
            <img
              className="w-full"
              src={`${ImgUrl}/${singleCollection.image_id}/full/843,/0/default.jpg`}
              alt="singleCollection"
            />
          </div>

          <div className="md:w-1/2 flex flex-col gap-10">
            <div>
              <h3>{singleCollection.title}</h3>
              <p className="line-clamp-6">{singleCollection.provenance_text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-white shadow-md px-11">Explore arts</button>
              <button className="bg-transparent shadow-none text-white">
                Explore arts
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleArt;
