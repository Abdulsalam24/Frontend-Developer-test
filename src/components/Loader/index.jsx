import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="spinner grid h-screen place-items-center">
      <ClipLoader color="#FBAF00" />
    </div>
  );
}

export default Loader;
