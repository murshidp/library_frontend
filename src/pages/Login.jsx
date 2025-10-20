import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        if (username === "admin" && password === "admin123") {
            console.log("Login successful")
            localStorage.setItem("auth", true);
            console.log("check success")
            navigate("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-700">
            <form className="bg-white shadow-xl rounded-2xl p-8 w-96" onSubmit={handleLogin}>
                 <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          📚 Library Login
        </h2>
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
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition-all"
        >
          Login
        </button>
            </form>

        </div>
    );
}