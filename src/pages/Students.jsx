import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Students() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
  const checkLogin = () => {
    const token = localStorage.getItem("access");
    if (!token) {
        navigate("/");
      
    }}
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    useEffect(() => {
      checkLogin();
    }, []);
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col">
            <Navbar onToggleSidebar={toggleSidebar} />
            <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Students Management 👥
        </h2>
        <div className="card">
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Student List</h3>
            <p className="text-gray-600">Students management functionality will be implemented here.</p>
        </div>
        </main>
        </div>
        </div>

  );
}