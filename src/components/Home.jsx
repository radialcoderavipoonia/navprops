import React from "react";
import fitfivegreen from "../assets/images/png/green.png";
import Physique from "./Physique";
import { fitgreen } from "./common/Help";
import GreenNav from "./GreenNav";
const Home = () => {
  return (
    <>
      <GreenNav/>
      <Physique
        fitfive_img={fitfivegreen}
        hadingtext="What we eat impacts our health and well-being on a fundamental level."
        hoverborder="br_hovergreen"
        fitfive={fitgreen}
      />
    </>
  );
};

export default Home;
