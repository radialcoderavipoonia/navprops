import React from "react";
import MyNav from "./MyNav";
import arrow from "../assets/images/png/dropdown_icon.png";
import aro from "../assets/images/png/dropdown_icon.png"
const RedNav = () => {
  return (
    <>
      <MyNav bg_color="bg_red" clr="color_red" all="All pages" arrow={aro}>
        <li className="ff_poppins fs_16 fw_400  pl_30 pe-2 mb-0">
          <a href="#" className="text-white">
            Work
          </a>
        </li>
        <span className="pointer">
          <img src={arrow} alt="arrow" />
        </span>
      </MyNav>
    </>
  );
};

export default RedNav;
