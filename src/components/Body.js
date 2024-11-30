import DestinationCard from "./DestinationCard";
import desData from "../utils/api";
import { useState } from "react";
import { Link } from "react-router";
import DestinationInfo from "./DestinationInfo";


const Body = () => {
    //local state variable - Super powerful variable
    const [desDataType, setDesDataType] = useState(desData);
    const [searchText, setSearchText] = useState("");

    const handleDestination = (e) => {
        const selected = e?.target?.value;
        if (selected === "Exoplanet") {
            const desType = desData?.filter(
                (des) => des.type === "Exoplanet"
            );
            setDesDataType(desType);
        }else if (selected === "Space Station") {
            const desType = desData?.filter(
                (des) => des.type === "Space Station"
            );
            setDesDataType(desType);
        }else if (selected === "Moon Base") {
            const desType = desData?.filter(
                (des) => des.type === "Moon Base"
            );
            setDesDataType(desType);
        }else {
            setDesDataType(desData);
        };
    };

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    >
                    </input>
                    <button
                        onClick={() => {
                            const filteredDestination = desData?.filter(
                                (des) => des.name.toLowerCase().includes(searchText)
                            );
                            setDesDataType(filteredDestination);
                        }}
                    >
                        Search
                    </button>
                </div>
                <select name="selectedDestinationType" defaultValue="" className="filter-btn"
                    onChange={(e) => handleDestination(e)}
                >
                <option value="" disabled hidden>Destination Type</option>
                <option value="Exoplanet">Exoplanet</option>
                <option value="Space Station">Space Station</option>
                <option value="Moon Base">Moon Base</option>
                <option value="All">All</option>
                </select>
            </div>
            <div className="des-cards-row">
                {
                    desDataType?.map((card, index) => (
                        <Link to={"/destinations/" + card?.id}><DestinationCard
                            key={index} 
                            desData={card}
                        /></Link>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Body;
