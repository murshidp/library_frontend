import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Students from "../pages/Students";
import Dashboard from "../pages/Dashboard";
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
    }
    
    
])   
export default router;