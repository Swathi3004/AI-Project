import { FaRobot, FaBook, FaChartLine, FaClipboardCheck } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-5xl text-blue-600" />,
      title: "AI Chatbot",
      description: "Ask questions and get instant AI-powered answers.",
    },
    {
      icon: <FaBook className="text-5xl text-green-600" />,
      title: "Learning Recommendation",
      description: "Get personalized study recommendations based on your performance.",
    },
    {
      icon: <FaClipboardCheck className="text-5xl text-orange-500" />,
      title: "Quiz",
      description: "Practice quizzes to improve your knowledge.",
    },
    {
      icon: <FaChartLine className="text-5xl text-purple-600" />,
      title: "Performance Dashboard",
      description: "Track your learning progress and scores.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Project Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-100 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;