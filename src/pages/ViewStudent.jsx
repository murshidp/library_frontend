import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { viewStudent } from "../api/students";
export default function ViewStudentDetail() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [studentData, setStudentData] = useState();
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const studentDetail = async () => {
        const response = await viewStudent(id);
        setLoading(false);
        console.log(response);
        setStudentData(response);
    }
    useEffect(() => {
        studentDetail();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={sidebarOpen} />
            <div className="flex-1 flex flex-col">
                <Navbar onToggleSidebar={toggleSidebar} />
                <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
  <h2 className="text-2xl font-semibold text-gray-700 mb-6">
    View {studentData.name}
  </h2>

  <div className="card bg-white shadow-md rounded-lg p-6">
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Name:</label>
        <span className="w-3/4 text-gray-800">{studentData.name}</span>
      </div>
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Phone:</label>
        <span className="w-3/4 text-gray-800">{studentData.phone}</span>
      </div>
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Register No:</label>
        <span className="w-3/4 text-gray-800">{studentData.register_no  }</span>
        </div>
        <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Class</label>
        <span className="w-3/4 text-gray-800">{studentData.class_name  }</span>
        </div>
        <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Division</label>
        <span className="w-3/4 text-gray-800">{studentData.division  }</span>
        </div>
    
        </div>
        </main>
            </div>
        </div>
    );
}