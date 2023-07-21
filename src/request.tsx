import axios, { AxiosInstance } from 'axios';


export const request: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL as string,
    headers: {
        Authorization: 'bearer ' + (process.env.REACT_APP_API_TOKEN as string),
    },
});
