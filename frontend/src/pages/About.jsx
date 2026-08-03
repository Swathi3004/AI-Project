import { FaRobot, FaUserGraduate, FaBrain, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
          About AI Student Assistant
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8">

          <p className="text-lg text-gray-700 leading-8 text-justify">
            AI Student Assistant is an intelligent web application developed
            to help students improve their learning through Artificial
            Intelligence. The system provides quiz assessments,
            performance analysis, personalized learning recommendations,
            and an AI chatbot powered by Google Gemini.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaUserGraduate className="text-5xl text-blue-600 mx-auto mb-4" />
            <h2 className="font-bold text-xl mb-2">Student Portal</h2>
            <p>
              Register, Login, Manage Profile and View Dashboard.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaBrain className="text-5xl text-purple-600 mx-auto mb-4" />
            <h2 className="font-bold text-xl mb-2">AI Chatbot</h2>
            <p>
              Ask any educational question and get AI-powered answers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaDatabase className="text-5xl text-green-600 mx-auto mb-4" />
            <h2 className="font-bold text-xl mb-2">Quiz System</h2>
            <p>
              Attend quizzes and monitor your performance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaRobot className="text-5xl text-orange-500 mx-auto mb-4" />
            <h2 className="font-bold text-xl mb-2">AI Recommendation</h2>
            <p>
              Get personalized learning suggestions based on quiz performance.
            </p>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold text-blue-700 mb-5">
            Technologies Used
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p>React JS, Tailwind CSS</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="font-bold mb-2">Backend</h3>
              <p>Python Flask</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="font-bold mb-2">Database & AI</h3>
              <p>MySQL & Google Gemini AI</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default About;