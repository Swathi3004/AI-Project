import { useEffect, useState } from "react";
import { getPerformanceHistory } from "../services/authService";
import { FaChartLine, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Performance() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchPerformance();
  }, []);

  const fetchPerformance = async () => {
    try {
      const response = await getPerformanceHistory(1);
      setHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700 flex items-center gap-3">
          <FaChartLine />
          Performance History
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <FaArrowLeft />
          Dashboard
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3">Attempt</th>
              <th>Score</th>
              <th>Total</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item, index) => (
              <tr
                key={index}
                className="text-center border-b hover:bg-gray-100"
              >
                <td className="py-3">{item.attempt}</td>
                <td>{item.score}</td>
                <td>{item.total_questions}</td>
                <td>{item.percentage}%</td>

                <td>
                  {item.percentage >= 80 ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Excellent
                    </span>
                  ) : item.percentage >= 60 ? (
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Good
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      Improve
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {history.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No Performance History Found
          </div>
        )}
      </div>
    </div>
  );
}

export default Performance;