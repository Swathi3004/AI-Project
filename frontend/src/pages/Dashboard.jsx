import {
  FaUserGraduate,
  FaBook,
  FaRobot,
  FaClipboardCheck,
} from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getQuizResult,
  getDashboard,
} from "../services/authService";

function Dashboard() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState({
    student_name: "",
    subjects: 0,
    ai_suggestions: 0,
  });

  const [quizResult, setQuizResult] = useState({
    percentage: 0,
  });

  useEffect(() => {
    fetchDashboard();
    fetchQuizResult();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard(1);
      setDashboard(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuizResult = async () => {
    try {
      const response = await getQuizResult(1);
      setQuizResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Student",
      value: dashboard.student_name,
      icon: <FaUserGraduate className="text-4xl text-blue-600" />,
    },
    {
      title: "Subjects",
      value: dashboard.subjects,
      icon: <FaBook className="text-4xl text-green-600" />,
    },
    {
      title: "Quiz Score",
      value: `${quizResult.percentage}%`,
      icon: <FaClipboardCheck className="text-4xl text-orange-500" />,
    },
    {
      title: "AI Suggestions",
      value: dashboard.ai_suggestions,
      icon: <FaRobot className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Student Dashboard
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Profile
          </button>

          <button
            onClick={() => navigate("/quiz")}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Quiz
          </button>

          <button
            onClick={() => navigate("/performance")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
          >
            Performance
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-500">{card.title}</h2>

                <p className="text-3xl font-bold mt-2">
                  {card.value}
                </p>
              </div>

              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* AI Recommendation */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-10">
        <h2 className="text-2xl font-bold mb-4">
          AI Recommendation
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          <li>Practice SQL Joins</li>
          <li>Revise DBMS Normalization</li>
          <li>Complete Java Quiz</li>
          <li>Watch Python Functions Tutorial</li>
        </ul>
      </div>

      {/* Floating Chatbot Button */}
<button
  onClick={() => navigate("/chatbot")}
  className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
>
  <FaComments className="text-3xl" />
</button>
    </div>
  );
}

export default Dashboard;