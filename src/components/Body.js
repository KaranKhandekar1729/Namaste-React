import DestinationCard, { withPromotedLabel } from "./DestinationCard";
import desData from "../utils/api";
import { use, useState } from "react";
import { Link } from "react-router";
import DestinationInfo from "./DestinationInfo";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    //local state variable - Super powerful variable
    const [desDataType, setDesDataType] = useState(desData);
    const [searchText, setSearchText] = useState("");

    const DestinationCardPromoted = withPromotedLabel(DestinationCard)

    const handleDestination = (e) => {
        const selected = e?.target?.value;
        if (selected === "Exoplanet") {
            const desType = desData?.filter(
                (des) => des.type === "Exoplanet"
            );
            setDesDataType(desType);
        } else if (selected === "Space Station") {
            const desType = desData?.filter(
                (des) => des.type === "Space Station"
            );
            setDesDataType(desType);
        } else if (selected === "Moon Base") {
            const desType = desData?.filter(
                (des) => des.type === "Moon Base"
            );
            setDesDataType(desType);
        } else {
            setDesDataType(desData);
        };
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Looks like youre offline!</h1>
        );

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
                        <Link to={"/destinations/" + card?.id}>
                            {card?.promoted ? (
                                <DestinationCardPromoted key={index} desData={card} />
                            ) : (
                                <DestinationCard key={index} desData={card} />
                            )} 
                        
                        </Link>
                    ))
                }
            </div>

        </div>
    );
};

export default Body;
