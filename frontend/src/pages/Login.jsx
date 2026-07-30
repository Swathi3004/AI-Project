import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { loginStudent } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await loginStudent(formData);

      alert(response.data.message);

      localStorage.setItem(
        "student",
        JSON.stringify(response.data.student)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Login
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Welcome back to AI Student Assistant
        </p>

        <div className="mt-8">
          <label className="font-medium">Email</label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-2">
            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full outline-none ml-3"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="font-medium">Password</label>

          <div className="flex items-center border rounded-lg px-3 py-2 mt-2">
            <FaLock className="text-gray-400" />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full outline-none ml-3"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-8 hover:bg-blue-700"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;