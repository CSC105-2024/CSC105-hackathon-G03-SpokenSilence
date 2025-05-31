import React from "react";
import Detailcard from "../card/detail-card";
import Create from "../dialog/create";
const DashboardMo = () => {
  return (
    <div>
      <div className="flex justify-between my-10">
        <p className="font-bold text-3xl">Your Flower</p>
        <Create />
      </div>
      <div className="py-5">
        <Detailcard />
      </div>
      <div className="py-5">
        <Detailcard />
      </div>
      <div className="py-5">
        <Detailcard />
      </div>
    </div>
  );
};

export default DashboardMo;
