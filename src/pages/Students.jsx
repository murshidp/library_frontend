import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { getStudents } from "../api/students";
import { Eye, Edit, Trash2 } from "lucide-react";

export default function Students() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
  const checkLogin = () => {
    const token = localStorage.getItem("access");
    if (!token) {
        navigate("/");
      
    }}
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const addStudentClick = () => {
      navigate('/students/new');
    }
    const viewStudentClick = (id) => {
      navigate(`/students/view/${id}`);
    }
    
    useEffect(() => {
      checkLogin();
    }, []);
  const handleStudents = async () => {
    const response =await getStudents();
    setStudents(response);
  }
  useEffect(() => {
    handleStudents();
  }, []);
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col">
            <Navbar onToggleSidebar={toggleSidebar} />
            <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
         <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Students Management 👥
                        </h2>
                        <button onClick={addStudentClick}
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition duration-200"
                        >
                            + Add Student
                        </button>
                    </div>
        <div className="card">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                      </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-light">
                        { students.map((student) => (
                        <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                {student.register_no}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {student.name}
                            </td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex justify-center gap-2">
                                    <button className="text-blue-600 hover:text-blue-800 p-1" onClick={() => viewStudentClick(student.id)} >
                                        <Eye size={16} />
                                    </button>
                                    <button className="text-green-600 hover:text-green-800 p-1">
                                        <Edit size={16} />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800 p-1">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        )) }
                      </tbody>
              </table>
        </div>
        </main>
        </div>
        </div>

  );
}