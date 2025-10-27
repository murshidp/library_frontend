import { Book, Users, Settings, Library, Home } from "lucide-react"; // icon library
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  const location = useLocation();
  const navigate = useNavigate();
  const studentsClick = () => {
    navigate('/students');
  };
  const dashboardClick = () => {
    navigate('/dashboard');
  };
  return (
    <aside className={`bg-white min-h-screen border-r border-gray-200 p-5 pr-0 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 p-0 overflow-hidden'}`}>
      <div className="flex items-center mb-8 gap-3">
        <Library className="w-6 h-6 text-blue-700" />
        <h2 className="text-xl font-bold text-blue-700">Library</h2>
      </div>
      <ul>
        <li className={`sidebar-item ${location.pathname === '/dashboard' ? 'sidebar-active' : ''}`} onClick={dashboardClick}>
          < Home /> Dashboard
        </li>
        <li className="sidebar-item">
          <Book /> Books
        </li>
        <li className={`sidebar-item ${location.pathname.includes(  '/students') ? 'sidebar-active' : ''}`} onClick={studentsClick}>
          <Users /> Students
        </li>
        <li className="sidebar-item">
          <Book /> Issued Books
        </li>
        <li className="sidebar-item">
          <Settings /> Settings
        </li>
      </ul>
    </aside>
  );
}
