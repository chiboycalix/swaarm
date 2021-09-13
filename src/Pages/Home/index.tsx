/** @format */

import React from "react";
import SpaceDragon from "../../Assets/spacex_dragon.png";
import { useHistory } from "react-router-dom";
import { Button } from "../../Components";
import "./styles.scss";

const Home: React.FC = () => {
  const history = useHistory();

  const handleViewLaunch = () => {
    history.push("/launches");
  };
  const handleCompareLaunch = () => {
    history.push("/compare");
  };
  return (
    <div className="home__wrapper">
      {/* hero section */}
      <div className="hero__wrapper">
        <div className="hero__left-section">
          <h1>
            EXPLORE EXPEDITIONS IN THE <span>UNIVERSE</span>{" "}
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quas debitis aspernatur ipsa voluptatum?
          </p>
          <div className="box__wrapper">
            <Button type="primary" onClick={handleViewLaunch}>
              Launches
            </Button>
            <Button type="secondary" onClick={handleCompareLaunch}>
              Compare
            </Button>
          </div>
        </div>
        <div className="hero__right-section">
          <img
            src={SpaceDragon}
            alt="SpaceDragon"
            className="space__dragon-image"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
