import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { addStudent } from "../api/students";
import { useNavigate } from "react-router-dom";
export default function AddStudents() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const handleNewStudent = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const sentData = await addStudent(data);
        navigate('/students');
        

        // Handle form submission logic here
    }
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={sidebarOpen} />
            <div className="flex-1 flex flex-col">
                <Navbar onToggleSidebar={toggleSidebar} />
                <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
  <h2 className="text-2xl font-semibold text-gray-700 mb-6">
    Add Student 👥
  </h2>

  <div className="card bg-white shadow-md rounded-lg p-6">
    <form onSubmit={handleNewStudent}>
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-3/4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Example for another field */}
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          required
          className="w-3/4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Register No</label>
        <input
          type="text"
          name="register_no"
          required
          className="w-3/4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Class</label>
        <input
          type="text"
          name="class_name"
          required
          className="w-3/4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="w-1/4 font-semibold text-gray-700">Division</label>
        <input
          type="text"
          name="division"
          required
          className="w-3/4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Student
      </button>
    </form>
  </div>
</main>

            </div>
            
        </div>
        
    );
};