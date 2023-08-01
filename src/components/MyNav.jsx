import React from "react";
import nav_logo from "../assets/images/png/Logo.png";
import arrow from "../assets/images/png/dropdown_icon.png";
const MyNav = (props) => {
  return (
    <>
      <section
        className={`mt-5
       ${props.bg_color}`}
      >
        <div className="my_container">
          <nav className="d-flex justify-content-between align-items-center pt_21 pb_21">
            <div>
              <img className="pointer" src={nav_logo} alt="nav logo" />
            </div>
            <ul className="mb-0 d-flex justify-content-between align-items-center">
              <li className="ff_poppins fs_16 fw_400  pe-2 mb-0">
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <span className="pointer">
                <img src={arrow} alt="arrow" />
              </span>
              <li className="ff_poppins fs_16 fw_400  pl_30 pe-2 mb-0">
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <span className="pointer">
                <img src={arrow} alt="arrow" />
              </span>
              <li className="ff_poppins fs_16 fw_400  pl_30 pe-2 mb-0">
                <a href="#" className="text-white">
                  Work
                </a>
              </li>
              <span className="pointer">
                <img src={arrow} alt="arrow" />
              </span>
              <li className="ff_poppins fs_16 fw_400  pl_30 pe-2 mb-0">
                <a href="#" className="text-white">
                  {props.all}
                </a>
              </li>
              <span className="pointer">
                <img src={arrow} alt="arrow" />
              </span>

              {props.children}
            </ul>
            <div className="d-flex gap-4">
              <button className="ff_poppins fs_16 fw_500 px-4 pt_12 pb_12 bg-transparent br_4 text-white border_white">
                Cart
              </button>
              <button
                className={`ff_poppins fs_16 fw_500 px-4 pt_12 pb_12 br_4 bg_white border-0 ${props.clr}`}
              >
                All Pages
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default MyNav;
