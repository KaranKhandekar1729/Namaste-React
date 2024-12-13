const DestinationCard = (props) => {

    const { desData } = props;

    const {
        name,
        images,
    } = desData;

    return (
        <div className="des-card">
            <img className="des-image" src={images[0]} />
            <h1>{name}</h1>
        </div>
    );
};

export const withPromotedLabel = (DestinationCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="promoted-label">Promoted</label>
                <DestinationCard {...props}/>
            </div>
        );
    };
}

export default DestinationCard;