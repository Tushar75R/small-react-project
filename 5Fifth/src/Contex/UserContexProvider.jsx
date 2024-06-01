import React, { useState } from "react";
import UserContex from "./UserContex";

const UserContexProvider = ({children}) => {
    const [data , setData] = useState(null)
    return (
        <UserContex.Provider value={{data , setData}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContexProvider; 