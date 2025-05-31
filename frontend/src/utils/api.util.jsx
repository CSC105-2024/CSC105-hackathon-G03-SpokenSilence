
import axios from "axios";

export const baseApi = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
})

baseApi.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
)

baseApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 400) {
                console.log('Bad request', error);
            }
            if (error.response.status === 401) {
                console.log('UnAuthorize', error);
            }
            if (error.response.status === 404) {
                console.log('Page not Found', error);
            }
            if (error.response.status === 500) {
                console.log('Internal Server Error', error);
            }
        }
        return Promise.reject(error);
    }
)

export const get = async (url, config = {}) => {
    const response = await baseApi.get(url, config);
    return response.data;
};

export const post = async (url, data, config = {}) => {
    const response = await baseApi.post(url, data, config);
    return response.data;
};

export const patch = async (url, data, config = {}) => {
    const response = await baseApi.patch(url, data, config);
    return response.data;
};

export const del = async (url, config = {}) => {
    const  response = await baseApi.delete(url, config);
    return response.data;
};
