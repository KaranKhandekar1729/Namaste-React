import useOnlineStatus from '../utils/useOnlineStatus';
import Hero from "./Hero";

const Body = () => {

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Looks like youre offline!</h1>
        );

    return (
        <div className="body">
            <Hero />
        </div>
    );
};

export default Body;
