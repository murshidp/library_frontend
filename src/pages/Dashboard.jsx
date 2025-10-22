    import { useNavigate } from 'react-router-dom';
    import Sidebar from "../components/Sidebar";
    import Navbar from "../components/Navbar";
    import { useEffect, useState } from "react";

    export default function Dashboard() {
        const navigate = useNavigate();
        const auth = localStorage.getItem("auth");
        const [sidebarOpen, setSidebarOpen] = useState(true);
        
        const checkLogin = () => {
            const token = localStorage.getItem("access");
            if (!token) {
                navigate("/login");
            }
        };
        
        const toggleSidebar = () => {
            setSidebarOpen(!sidebarOpen);
        };
        
        useEffect(()=>{
        checkLogin();
        },[auth] )
        return (
        <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col">
            <Navbar onToggleSidebar={toggleSidebar} />
            <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Welcome back, {localStorage.getItem("username")} 👋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Total Books</h3>
                <p className="text-3xl font-bold">240</p>
                </div>
                <div className="card">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Issued Books</h3>
                <p className="text-3xl font-bold">35</p>
                </div>
                <div className="card">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Registered Students</h3>
                <p className="text-3xl font-bold">120</p>
                </div>
            </div>
            </main>
        </div>
        </div>
    );
    }