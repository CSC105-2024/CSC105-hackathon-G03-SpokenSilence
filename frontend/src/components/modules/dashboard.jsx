import React from "react";
import DetailCard from "../card/detail-card";
import Create from "../dialog/create";
import {useFlower} from "@/contexts/flower-context.jsx";

const DashboardMo = () => {
    const { flower } = useFlower();
    return (
        <div>
            <div className="flex justify-between">
                <p className="font-bold text-3xl">Your Flower</p>
                <Create />
            </div>
            
            {flower?.map((f) => (
                <div className="py-5" key={f.id}>
                    <DetailCard message={f.message} accessKey={f.access_key} link={f.url} />
                </div>
            ))}
        </div>
    );
};

export default DashboardMo;
