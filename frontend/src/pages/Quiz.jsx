import { useEffect, useState } from "react";
import { getQuizzes, submitQuiz } from "../services/authService";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
const [result, setResult] = useState(null);

  useEffect(() => {
  fetchQuizzes();
}, []);

const fetchQuizzes = async () => {
  try {
    const response = await getQuizzes();
    setQuestions(response.data);
  } catch (error) {
    console.log(error);
  }
};

const handleAnswerChange = (questionId, answer) => {
  setSelectedAnswers((prev) => ({
    ...prev,
    [questionId]: answer,
  }));
};

const handleSubmit = async () => {
  const payload = {
    student_id: 1,
    answers: questions.map((q) => ({
      question_id: q.id,
      selected_answer: selectedAnswers[q.id] || "",
    })),
  };

  try {
    const response = await submitQuiz(payload);
    setResult(response.data);
  } catch (error) {
    console.log(error);
    alert("Quiz submission failed");
  }
};

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Student Quiz
        </h1>

        {questions.map((q, index) => (
          <div key={q.id} className="mb-8">
            <h2 className="font-semibold text-lg mb-4">
              {index + 1}. {q.question}
            </h2>

            <div className="space-y-2">
              {[q.option1, q.option2, q.option3, q.option4].map((option, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 border rounded-lg p-3 hover:bg-gray-100 cursor-pointer"
                >
                 <input
  type="radio"
  name={`question-${q.id}`}
  value={option}
  checked={selectedAnswers[q.id] === option}
  onChange={() => handleAnswerChange(q.id, option)}
/>
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
  onClick={handleSubmit}
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
>
  Submit Quiz
</button>

{result && (
  <div className="mt-6 bg-green-100 border border-green-300 rounded-lg p-4">
    <h2 className="text-xl font-bold text-green-700">
      Quiz Result
    </h2>

    <p>Score: {result.score} / {result.total_questions}</p>

    <p>Percentage: {result.percentage}%</p>
  </div>
)}
      </div>
    </div>
  );
}

export default Quiz;