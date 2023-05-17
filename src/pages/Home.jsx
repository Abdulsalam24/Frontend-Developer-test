import ArtCollection from "../components/Home/ArtCollection";
import Hero from "../components/Home/Hero";

const Home = () => (
  <div className="flex flex-col gap-20">
    <Hero />
    <ArtCollection />
  </div>
);

export default Home;
