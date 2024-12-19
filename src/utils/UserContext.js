import { use, createContext } from "react";

const userContext = createContext({
    loggedInUser: "Jules",
});

export default userContext;