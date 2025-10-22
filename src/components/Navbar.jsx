import { Menu } from "lucide-react";

export default function Navbar({ onToggleSidebar }) {
    const logOut = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("username");
        window.location.href = "/";
    };
  return (
    <nav className="bg-white shadow flex justify-between items-center px-6 py-3 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-md transition"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-semibold text-blue-700">📖 Library Dashboard</h1>
      </div>
      <button
        onClick={logOut}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </nav>
  );
}