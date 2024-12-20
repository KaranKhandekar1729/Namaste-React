import useOnlineStatus from '../utils/useOnlineStatus';
import Hero from "./Hero";
import Footer from "./Footer";

const Body = () => {

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>Looks like youre offline!</h1>
        );

    return (
        <div className="body">
            <Hero />
            <Footer />
        </div>
    );
};

export default Body;
