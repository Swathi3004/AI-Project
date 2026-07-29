import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGraduationCap } from "react-icons/fa";
import { registerStudent } from "../services/authService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("CSE");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const studentData = {
        name,
        email,
        department,
        password,
      };

      const response = await registerStudent(studentData);

      alert(response.data.message);

      console.log(response.data);

      // Clear form after successful registration
      setName("");
      setEmail("");
      setDepartment("CSE");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Student Registration
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Create your AI Student Assistant account
        </p>

        {/* Full Name */}
        <div className="mt-6">
          <label>Full Name</label>

          <div className="flex items-center border rounded-lg p-3 mt-2">
            <FaUser className="text-gray-400" />

            <input
              type="text"
              placeholder="Enter your full name"
              className="ml-3 w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4">
          <label>Email</label>

          <div className="flex items-center border rounded-lg p-3 mt-2">
            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="ml-3 w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Department */}
        <div className="mt-4">
          <label>Department</label>

          <div className="flex items-center border rounded-lg p-3 mt-2">
            <FaGraduationCap className="text-gray-400" />

            <select
              className="ml-3 w-full outline-none"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>CSE</option>
              <option>IT</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>MECH</option>
            </select>
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <label>Password</label>

          <div className="flex items-center border rounded-lg p-3 mt-2">
            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Create password"
              className="ml-3 w-full outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-3 rounded-lg mt-8 hover:bg-blue-700"
        >
          Register
        </button>

      </div>
    </div>
  );
}

export default Register;