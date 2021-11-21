import axiosBase from "./axiosBase";

const API = {
    signUp,
    signIn,
    validateToken,
    getPlans,
};

function createBearerTokenAuthorization(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

function signUp({ name, email, password }) {
    return axiosBase.post("/sign-up", {
        name,
        email,
        password,
    });
}

function signIn({ email, password }) {
    return axiosBase.post("/sign-in", {
        email,
        password,
    });
}

function validateToken(token) {
    return axiosBase.get("/auth", createBearerTokenAuthorization(token));
}

function getPlans(token) {
    return axiosBase.get("/plans", createBearerTokenAuthorization(token));
}

export default API;
