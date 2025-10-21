import { createContext } from "react";

const userContext = createContext({
    user:{
    name: "Piyush Patil",
    email: "piyushpatil1741@gmail.com"
    },
});

export default userContext;
