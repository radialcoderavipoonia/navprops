import React from "react";
import { Col, Row } from "react-bootstrap";
import { fitfive } from "./common/Help";
const Physique = ({
  fitfive_img,
  hadingtext,
  children,
  hoverborder,
  fitfive,
}) => {
  return (
    <>
      <section className="bg_black mb-5 pb-5 br_80">
        <div className="my_container pt-5 pb-4">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img
              src={fitfive_img}
              alt="page logo"
              className="w-100 mw_296 h_183"
            />
            <p className="ff_poppins pt_27 fs_16 fw_400 text-white text-center opacity_69 mb-0">
              {hadingtext}
            </p>
            {children}
          </div>
          <Row className="pt-5 mt_40">
            {fitfive.map((card) => {
              return (
                <Col lg={6} key={card.id} className="mt-3 pt-1">
                  <div className={` bg_card d-flex flex-column ${hoverborder}`}>
                    <img
                      src={card.img}
                      alt="card images"
                      className="pt-4 mt-1 ps-4 ms-1 mb-0 "
                      width={80}
                      height={70}
                    />
                    <p className="text-white ps-4 ms-1 ff_poppins fs_16 fw_500 pt-3">{card.hading}</p>
                    <p className="mb-0 ps-4 ms-1 ff_poppins bg_change fs_16 fw_400 text-white opacity-50 pt-2">
                      {card.para}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Physique;
