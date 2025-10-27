import axios from "axios";
export const getStudents = async () => {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("access")}`,
            'Content-Type': 'application/json',
        };
        const response = await axios.get("http://localhost:8000/api/students/", { headers: headers });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data || "Failed to fetch students");
        } else {
            throw new Error("Network error");
        }
    }
};
export const addStudent = async (studentData) => {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("access")}`,
            'Content-Type': 'application/json',
        };
        const response = await axios.post("http://localhost:8000/api/students/", studentData, { headers: headers });
        return await response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data || "Failed to add student");
        } else {
            throw new Error("Network error");
        }
    }};

    export const viewStudent = async (studentId) => {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem("access")}`,
                'Content-Type': 'application/json',
            };
            const response = await axios.get(`http://localhost:8000/api/students/${studentId}/`, { headers: headers });
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(error.response.data || "Failed to fetch student details");
            } else {
                throw new Error("Network error");
            }
        }
    };