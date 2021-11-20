import { createContext, useState } from "react";
import { setLocalStorage } from "../helpers/localStorage";

const UserContext = createContext({});

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({});

    function saveUser(userObj) {
        setUserData(userObj);
        setLocalStorage(userObj);
    }

    return (
        <UserContext.Provider
            value={{
                userData,
                saveUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export default UserContext;
