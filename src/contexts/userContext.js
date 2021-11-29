import { createContext, useEffect, useState } from "react";
import {
    clearLocalStorage,
    getUserFromLocalStorage,
    setLocalStorage,
} from "../helpers/localStorage";
import API from "../services/API/requests";

const UserContext = createContext({});

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({});
    const [activeSubscription, setActiveSubscription] = useState(false);
    const [userPlan, setUserPlan] = useState({});
    const [planType, setPlanType] = useState(null);

    const localSavedUser = getUserFromLocalStorage();

    useEffect(() => {
        if (!userData?.user && localSavedUser) setUserData(localSavedUser);
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

    function logOut() {
        clearLocalStorage();
        setUserData(null);
        setActiveSubscription(false);
        setUserPlan({});
    }

    return (
        <UserContext.Provider
            value={{
                userData,
                persistLogin,
                validateToken,
                activeSubscription,
                setActiveSubscription,
                userPlan,
                setUserPlan,
                logOut,
                planType,
                setPlanType,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
export default UserContext;
