import axios from "axios";
import { use } from "react";
const API_URL = "http://localhost:8000/api/accounts/";
export const adminLogin = async (username, password) => {
try {
    const response = await axios.post(`${API_URL}admin-login/`, {username, password});
    return response.data;
}
catch (error) {
    if (error.response) {
    throw new Error(error.response.data.message.error || "Login failed");
}
else {
    throw new Error("Network error");
}
}
};