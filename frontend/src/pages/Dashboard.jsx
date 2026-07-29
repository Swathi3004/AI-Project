import {
  FaUserGraduate,
  FaBook,
  FaRobot,
  FaClipboardCheck,
} from "react-icons/fa";

function Dashboard() {
  const cards = [
    {
      title: "Student",
      value: "Swathi",
      icon: <FaUserGraduate className="text-4xl text-blue-600" />,
    },
    {
      title: "Subjects",
      value: "6",
      icon: <FaBook className="text-4xl text-green-600" />,
    },
    {
      title: "Quiz Score",
      value: "85%",
      icon: <FaClipboardCheck className="text-4xl text-orange-500" />,
    },
    {
      title: "AI Suggestions",
      value: "4",
      icon: <FaRobot className="text-4xl text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        Student Dashboard
      </h1>

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
    </div>
  );
}

export default Dashboard;