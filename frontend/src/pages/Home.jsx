import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-100 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-blue-700 text-center">
          AI-Based College Student Assistant
        </h1>

        <p className="mt-6 text-xl text-gray-600 text-center">
          Personalized Learning Recommendation using Artificial Intelligence
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>

          <Link to="/login" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <Features />
    </>
  );
}

export default Home;