import React from "react";
import Detailcard from "../card/detail-card";
import Create from "../dialog/create";
import {useFlower} from "@/contexts/flower-context.jsx";

const DashboardMo = () => {
    const { flower } = useFlower();
    console.log(flower)
    return (
        <div>
            <div className="flex justify-between">
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
