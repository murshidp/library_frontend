import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Students from "../pages/Students";
import Dashboard from "../pages/Dashboard";
import AddStudents from "../pages/AddStudents";
import ViewStudentDetail from "../pages/ViewStudent";
const router =  createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/students",
        element: <Students />
    },
    {
        path: "/students/new",
        element: <AddStudents />
    },
    {
        path: "/students/view/:id",
        element: <ViewStudentDetail />
    }
    
    
])   
export default router;