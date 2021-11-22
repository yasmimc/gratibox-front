const API_URL =
    process.env.NODE_ENV === "production"
        ? "https://gratibox-project.herokuapp.com/"
        : "http://localhost:4000/";

export { API_URL };
