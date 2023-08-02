import React from "react";
import Physique from "./Physique";
import { fitred } from "./common/Help";
import fitfivegreen from "../assets/images/png/fitfive_physique.png";
import RedNav from "./RedNav";

const About = () => {
  return (
    <>
      <RedNav/>
      <Physique
        fitfive_img={fitfivegreen}
        hadingtext="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions."
        fitfive={fitred}
        
        hoverborder="br_hoverred"
      >
        <div className="text-center">
          <button className="border-0 ff_poppins fs_16 fw_500 btn_gettouch text-white mt-3">
            Get in touch
          </button>
        </div>
      </Physique>
    </>
  );
};

export default About;
