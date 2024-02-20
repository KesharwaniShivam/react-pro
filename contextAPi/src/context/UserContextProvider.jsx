import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null)

    return(                          // ek object banake sab value pass kar denge //data provide to karana hai but kaha se , so "value" se access lenge data ka 
        <UserContext.Provider value= {{user, setUser}}>  
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;