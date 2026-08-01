import { useState } from "react";
import { FaRobot, FaUser, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Chatbot() {
  const navigate = useNavigate();

  const chatData = {
    "Improve SQL":
      "Practice SELECT, WHERE, GROUP BY, ORDER BY, JOINS and solve at least 10 SQL problems every day.",

    "Learn React":
      "Learn Components, Props, State, Hooks, Routing, API Integration and build mini projects.",

    "DBMS Topics":
      "Study Normalization, Joins, Transactions, Indexing, Constraints and SQL Queries.",

    "AI Projects":
      "Try Fake News Detection, Student Recommendation System, Face Recognition and AI Chatbot projects.",

    "Interview Tips":
      "Revise DBMS, OS, React, JavaScript, SQL and explain your projects confidently.",

    "Quiz Preparation":
      "Take quizzes daily, revise incorrect answers and practice coding regularly.",
  };

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "Hello Swathi 👋\nI'm your AI Student Assistant.\nChoose any question below.",
    },
  ]);

  const askQuestion = (question) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
      {
        sender: "bot",
        text: chatData[question],
      },
    ]);
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text:
          "Hello Swathi 👋\nI'm your AI Student Assistant.\nChoose any question below.",
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-3">
          <FaRobot />
          AI Chatbot
        </h1>

        <div className="flex gap-3">
          <button
            onClick={clearChat}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Clear Chat
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
          >
            <FaArrowLeft />
            Dashboard
          </button>
        </div>
      </div>

      {/* Chat Box */}

      <div className="bg-white rounded-xl shadow-lg p-6 h-[600px] overflow-y-auto">

        {/* Messages */}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-md p-4 rounded-xl ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {msg.sender === "bot" ? <FaRobot /> : <FaUser />}

                <span className="font-bold">
                  {msg.sender === "bot"
                    ? "AI Assistant"
                    : "You"}
                </span>
              </div>

              <p className="whitespace-pre-line">
                {msg.text}
              </p>
            </div>
          </div>
        ))}

        {/* Suggested Questions */}

        <div className="mt-8 pt-5">
          <h3 className="font-bold text-gray-700 mb-4">
            Suggested Questions
          </h3>

          <div className="flex flex-wrap gap-3">
            {Object.keys(chatData).map((question) => (
              <button
                key={question}
                onClick={() => askQuestion(question)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}

export default Chatbot;