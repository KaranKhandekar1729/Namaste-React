import DestinationCard from "./DestinationCard";
import desData from "../utils/api";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        console.log("clicked");
                    }}
                    onMouseOver={() => {
                        console.log("hover");
                    }}
                >
                    Destination Type
                </button>
            </div>
            <div className="des-cards-row">
                {
                    desData?.map((card, index) => (
                        <DestinationCard
                            desData={card}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Body;
