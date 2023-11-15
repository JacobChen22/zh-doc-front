import axios from "axios";
import {isDev} from "../../utils";

export const commonRequest = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_HOST,
    timeout: 3000,
    withCredentials: !isDev()
});

// TODO: auth interceptor