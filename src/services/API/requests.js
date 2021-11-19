import axiosBase from "./axiosBase";

const API = {
    signUp,
    // signIn,
    // validateToken,
};

function signUp({ name, email, password }) {
    return axiosBase.post("/sign-up", {
        name,
        email,
        password,
    });
}

export default API;
