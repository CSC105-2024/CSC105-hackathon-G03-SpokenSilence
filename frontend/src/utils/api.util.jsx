import Cookies from 'js-cookie';
import axios from "axios";

export const baseApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,

})

baseApi.interceptors.request.use(
    (config) => {
        const token = Cookies.get("accessToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config
    },
    (error) => {
       return Promise.reject(error);
    }
)

baseApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 400) {
            console.log('Bad request', error);
        }

        if (error.response.status === 401) {
            console.log('Login error', error);
        }

        if (error.response.status === 404) {
            console.log('Page not Found', error);
        }

        if (error.response.status === 500) {
            console.log('Internal Server Error', error);
        }
        return Promise.reject(error);
    }
)

export const get = async (url, config = {}) => {
    return await baseApi.get(url, config);
};

export const post = async (url, data, config = {}) => {
    return await baseApi.post(url, data, config);
};

export const patch = async (url, data, config = {}) => {
    return await baseApi.patch(url, data, config);
};

export const del = async (url, config = {}) => {
    return await baseApi.delete(url, config);
};