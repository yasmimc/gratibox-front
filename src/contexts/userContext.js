import { createContext, useEffect, useState } from "react";
import {
    getUserFromLocalStorage,
    setLocalStorage,
} from "../helpers/localStorage";
import API from "../services/API/requests";

const UserContext = createContext({});

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({});
    const localSavedUser = getUserFromLocalStorage();

    useEffect(() => {
        if (!userData.user && localSavedUser) setUserData(localSavedUser);
    }, [userData]);

    function persistLogin(userObj) {
        setUserData(userObj);
        setLocalStorage(userObj);
    }

    async function validateToken() {
        if (localSavedUser) {
            try {
                const auth = await API.validateToken(localSavedUser.token);
                if (auth.status === 200) return true;
            } catch (error) {
                console.error("Fail to authenticate user");
            }
        } else return false;
    }

    return (
        <UserContext.Provider
            value={{
                userData,
                persistLogin,
                validateToken,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export default UserContext;
