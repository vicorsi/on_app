import axios from "axios";

export const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
};

const api = axios.create({
    baseURL: "http://10.109.71.11:8080/api/v1/",
    headers: headers,
});

export default api