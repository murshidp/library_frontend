import { Book, Users, Settings, Library } from "lucide-react"; // icon library

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`bg-white min-h-screen border-r border-gray-200 p-5 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 p-0 overflow-hidden'}`}>
      <div className="flex items-center mb-8 gap-3">
        <Library className="w-6 h-6 text-blue-700" />
        <h2 className="text-xl font-bold text-blue-700">Library</h2>
      </div>
      <ul>
        <li className="sidebar-item sidebar-active">
          <Book /> Books
        </li>
        <li className="sidebar-item">
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
