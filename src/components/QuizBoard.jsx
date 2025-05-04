import { useEffect, useState } from "react";
import backgroundImage from "../assets/게임배경.png";

// ✅ 이미지들 import
import img빵꾸똥꾸야 from "../assets/빵꾸똥꾸야.png";
import img진실의방으로 from "../assets/진실의_방으로.png";
import img예나선정이 from "../assets/예나_선정이.png";
import imgIron from "../assets/i_am_iron.png";
import imgFather from "../assets/i_am_your_father.png";
import imgDobby from "../assets/dobby_is_free.png";
import imgBack from "../assets/ill_be_back.png";
import img유재석 from "../assets/유재석.png";
import imgBTS from "../assets/BTS.png";
import img블랙핑크 from "../assets/블랙핑크.png";
import img아이유 from "../assets/아이유.png";
import img아리아나 from "../assets/아리아나_그란데.png";
import img테일러 from "../assets/테일러_스위프트.png";
import img잭슨 from "../assets/마이클_잭슨.png";
import img조던 from "../assets/마이클_조던.png";
import img이소룡 from "../assets/이소룡.png";
import img일본 from "../assets/일본.png";
import img베트남 from "../assets/베트남.png";
import img중국 from "../assets/중국.png";
import img한국 from "../assets/한국.png";
import img난_딴_돈의 from "../assets/난_딴_돈의.png";
import img마동석 from "../assets/마동석.png";
import img누구인가 from "../assets/누구인가.png";
import imgmy_precious from "../assets/my_precious.png";
import img러시아 from "../assets/러시아.png";

// ✅ 이미지 매핑
const imageMap = {
  "my_precious.png": imgmy_precious,
  "빵꾸똥꾸야.png": img빵꾸똥꾸야,
  "진실의_방으로.png": img진실의방으로,
  "예나_선정이.png": img예나선정이,
  "i_am_iron.png": imgIron,
  "i_am_your_father.png": imgFather,
  "dobby_is_free.png": imgDobby,
  "ill_be_back.png": imgBack,
  "유재석.png": img유재석,
  "BTS.png": imgBTS,
  "블랙핑크.png": img블랙핑크,
  "아이유.png": img아이유,
  "아리아나_그란데.png": img아리아나,
  "테일러_스위프트.png": img테일러,
  "마이클_잭슨.png": img잭슨,
  "마이클_조던.png": img조던,
  "이소룡.png": img이소룡,
  "일본.png": img일본,
  "베트남.png": img베트남,
  "중국.png": img중국,
  "한국.png": img한국,
  "마동석.png": img마동석,
  "난_딴_돈의.png": img난_딴_돈의,
  "누구인가.png": img누구인가,
  "러시아.png": img러시아,
};
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
      className="h-screen flex items-center justify-center bg-cover bg-center p-2 sm:p-3 md:p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#4B3F28",
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-yellow-100 bg-opacity-90 rounded-lg shadow p-2 sm:p-3 border border-yellow-300"
          >
            <h2 className="text-center font-bold text-sm sm:text-base md:text-lg text-red-800 mb-2">
              {cat.name}
            </h2>
            {cat.questions.map((q, j) => (
              <button
                key={j}
                className={`w-full mb-1 py-1 sm:py-2 rounded-lg font-semibold border text-xs sm:text-sm md:text-base transition-all duration-200 ${
                  q.answered
                    ? "bg-orange-200 text-gray-700 border-gray-300 cursor-not-allowed"
                    : "bg-yellow-300 hover:bg-yellow-200 text-red-900 border-yellow-500"
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
    className="fixed inset-0 flex items-center justify-center z-[1000] px-4"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(4px)",
    }}
  >
   <div className="bg-yellow-100 text-red-900 p-6 sm:p-10 rounded-3xl border-4 border-yellow-500 shadow-2xl max-w-xl w-full text-center">
  {/* ✅ 이미지 중앙 + 더 붙게 */}
  {currentQuestion.image && imageMap[currentQuestion.image] && (
    <div className="flex justify-center">
      <img
        src={imageMap[currentQuestion.image]}
        alt="문제 이미지"
        className="mb-4 max-h-72 object-contain"
      />
    </div>
  )}

  <p className="text-lg sm:text-xl md:text-2xl font-bold whitespace-pre-line min-h-[60px]">
    {showAnswer ? currentQuestion.answer : currentQuestion.question}
  </p>

  <button
    className="mt-4 px-8 py-3 bg-yellow-500 text-red-900 font-semibold rounded-full shadow-md hover:bg-yellow-600 transition"
    onClick={showAnswer ? handleClose : () => setShowAnswer(true)}
  >
    {showAnswer ? "닫기" : "정답 보기"}
  </button>
</div>

  </div>
)}


    </div>
  );
}
