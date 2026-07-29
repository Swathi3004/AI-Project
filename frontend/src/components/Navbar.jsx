import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Student Assistant
        </h1>

        <div className="space-x-6">
           <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-600 font-medium">
            About
          </Link>

          <Link to="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>

           <Link
    to="/register"
    className="hover:text-blue-600 font-medium"
  >
    Register
  </Link>

           <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;