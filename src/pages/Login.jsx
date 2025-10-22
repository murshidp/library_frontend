import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { adminLogin } from "../api/auth";
export default function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            navigate("/dashboard");
        }
    }, [navigate]);
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const username = e.target.username.value;
        const password = e.target.password.value;
        try {
          const response = await adminLogin(username, password);
          localStorage.setItem("access", response.data.access);
          localStorage.setItem("refresh", response.data.refresh);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("auth", true);
          navigate("/dashboard");
        }
        catch (err) {
          setError(err.message);
        }
        finally {
          setLoading(false);
        }
      };
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
            <form className="bg-white shadow-xl rounded-2xl p-8 w-96" onSubmit={handleLogin}>
                 <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          📚 Library Login
        </h2>
        {error && (
          <p className="text-red-600 bg-red-100 border border-red-300 p-2 rounded mb-4 text-sm text-center">
            {error}
          </p>
        )}
         <input
          type="username"
          placeholder="username"
          name="username"
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          
          
        />
        <button
          type="submit" disabled={loading}
          className={`w-full py-2.5 rounded-md text-white transition-all ${
            loading ? "bg-blue-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"
          }`}
        
        >
          {loading ? "Logging in..." : "Login"}
        </button>
            </form>

        </div>
    );
}