import { useEffect, useState } from "react";
import backgroundImage from "../assets/게임배경.png";

export default function QuizBoard() {
  const [categories, setCategories] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch("/questions1.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleClick = (question) => {
    setCurrentQuestion(question);
    setShowAnswer(false);
  };

  const handleClose = () => {
    setCurrentQuestion(null);
    setShowAnswer(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 sm:p-6 md:p-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#4B3F28",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-yellow-100 bg-opacity-90 rounded-xl shadow-lg p-3 sm:p-4 border-2 border-yellow-400"
          >
            <h2 className="text-center font-bold text-base sm:text-lg md:text-xl text-red-800 mb-4">
              {cat.name}
            </h2>
            {cat.questions.map((q, j) => (
              <button
                key={j}
                className={`w-full mb-2 py-2 sm:py-3 rounded-xl font-bold border text-sm sm:text-base md:text-lg transition-all duration-200 ${
                  q.answered
                    ? "bg-orange-300 text-gray-700 border-gray-400 cursor-not-allowed"
                    : "bg-yellow-400 hover:bg-yellow-300 text-red-900 border-yellow-600"
                }`}
                onClick={() => {
                  if (!q.answered) {
                    q.answered = true;
                    handleClick(q);
                  }
                }}
              >
                {q.value}점
              </button>
            ))}
          </div>
        ))}
      </div>

      {currentQuestion && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 px-4"
          style={{
            backgroundColor: "rgba(255, 223, 186, 0.7)",
            backdropFilter: "blur(2px)",
          }}
          onClick={showAnswer ? handleClose : () => setShowAnswer(true)}
        >
          <div className="bg-yellow-100 text-red-900 p-6 sm:p-8 rounded-xl border-4 border-yellow-600 shadow-xl max-w-md sm:max-w-xl text-center w-full">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold whitespace-pre-line">
              {showAnswer ? currentQuestion.answer : currentQuestion.question}
            </p>
            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              {showAnswer ? "(화면을 클릭하여 닫기)" : "(화면을 클릭하여 정답 보기)"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
