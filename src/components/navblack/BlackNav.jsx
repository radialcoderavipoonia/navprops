import React from "react";
import MyNav from "../common/MyNav";
import FormSumbit from "../formsumbit/FormSumbit";

const BlackNav = () => {
  return (
    <>
      <MyNav bg_color="bg_black" clr="color_black" all="All pages" />
      <FormSumbit />
    </>
  );
};

export default BlackNav;
