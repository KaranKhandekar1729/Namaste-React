import DestinationCard from "./DestinationCard";
import desData from "../utils/api";
import { useState } from "react";

const Body = () => {
    //local state variable - Super powerful variable
    const [desDataType, setDesDataType] = useState(desData);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const desType = desData?.filter(
                            (des) => des.type === "Exoplanet"
                        );
                        setDesDataType(desType);
                    }}
                >
                    Destination Type
                </button>
            </div>
            <div className="des-cards-row">
                {
                    desDataType?.map((card, index) => (
                        <DestinationCard
                            key={index} 
                            desData={card}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
