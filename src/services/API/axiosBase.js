import axios from "axios";

const axiosBase = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://gratibox-orpin.vercel.app/"
            : "http://localhost:4000/",
});

export default axiosBase;
