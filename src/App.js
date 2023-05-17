import { Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import Layout from './layout';
import SingleArt from './pages/SingleArt';

export const ImgUrl = "https://www.artic.edu/iiif/2/";

const App = () => {
  return (
    <div className="App relative">
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home />
            }
          />
          <Route
            exact
            path="/singleArt/:id"
            element={
              <SingleArt />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
