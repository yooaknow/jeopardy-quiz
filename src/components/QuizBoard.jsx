import { useEffect, useState } from "react";
import backgroundImage from "../assets/게임배경.png";
import "../index.css";

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
  const [teamScores, setTeamScores] = useState(Array(10).fill(0));
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showScorePanel, setShowScorePanel] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);


  useEffect(() => {
    fetch("/questions1.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleClick = (question) => {
    setCurrentQuestion(question);
    setShowAnswer(false);
    setSelectedTeam(null);
  };

  const handleClose = () => {
    setCurrentQuestion(null);
    setShowAnswer(false);
    setSelectedTeam(null);
    setShowAssignModal(false);
  };

  const handleScoreAssign = () => {
    if (selectedTeam != null) {
      const newScores = [...teamScores];
      newScores[selectedTeam] += currentQuestion.value;
      setTeamScores(newScores);
      handleClose();
    }
  };

  const sortedScores = [...teamScores]
    .map((score, index) => ({ team: index + 1, score }))
    .sort((a, b) => b.score - a.score);

  const maxScore = Math.max(...teamScores, 1);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center pt-2 px-4 pb-6 md:pt-4 md:px-8 md:pb-10 font-sans text-[#4B3F28]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
     <div className="w-full max-w-6xl relative flex justify-end mb-3 md:mb-5">
  <button
    className="px-4 py-2 text-base bg-red-500 text-white font-bold rounded-lg shadow hover:bg-red-600 transition"
    onClick={() => setShowScorePanel(!showScorePanel)}
  >
    📊 점수 집계 보기
  </button>

  {showScorePanel && (
    <div className="absolute top-12 right-0 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border-2 border-yellow-500 z-50 w-72">
      <h3 className="font-extrabold text-red-800 text-base text-center mb-3">
        🏆 조별 점수판
      </h3>
      <ul className="space-y-2 text-sm font-semibold text-red-700">
        {sortedScores.map(({ team, score }) => (
          <li key={team} className="flex items-center gap-2">
            <span className="w-10 text-left">{team}조</span>
            <div className="flex-1 bg-yellow-200 rounded-full overflow-hidden">
              <div
                className="bg-green-500 h-3"
                style={{ width: `${(score / maxScore) * 100}%` }}
              ></div>
            </div>
            <span className="w-12 text-black text-right">{score}점</span>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>



      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-yellow-100 bg-opacity-90 rounded-lg shadow p-4 border border-yellow-300 flex flex-col items-center"
          >
            <h2 className="text-center font-bold text-base text-red-800 mb-3">
              {cat.name}
            </h2>
            <div className="flex flex-col w-full items-center">
              {cat.questions.map((q, j) => (
                <button
                  key={j}
                  className={`w-full mb-2 py-1.5 rounded-lg font-bold text-base shadow-md transition transform duration-200 text-center ${
                    q.answered
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-yellow-400 text-red-900 hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                  
                  
                  onClick={() => {
                    if (!q.answered) {
                      setPendingQuestion(q);
                      setShowConfirmModal(true);
                    }
                  }}
                  
                  
                >
                  {q.value}점
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showConfirmModal && pendingQuestion && (
  <div
    className="fixed inset-0 flex items-center justify-center z-[1002] px-4"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
  >
    <div className="bg-white p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl max-w-sm w-full text-center">
      <h4 className="text-lg font-bold text-yellow-800 mb-4">
        이 문제를 선택하시겠습니까?
      </h4>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl shadow-md transition"
          onClick={() => {
            pendingQuestion.answered = true;
            handleClick(pendingQuestion);
            setShowConfirmModal(false);
            setPendingQuestion(null);
          }}
        >
          ✅ 네!
        </button>
        <button
  className="px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold rounded-xl shadow transition"
  onClick={() => {
    setShowConfirmModal(false);
    setPendingQuestion(null);
  }}
>
  ❌ 취소
</button>

      </div>
    </div>
  </div>
)}


{currentQuestion && (
  <div
    className="fixed inset-0 flex items-center justify-center z-[1000] px-4"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
  >
    <div className="relative bg-yellow-100 text-red-900 p-8 sm:p-12 rounded-3xl border-4 border-yellow-500 shadow-2xl max-w-4xl w-full text-center">

    <button
  onClick={handleClose}
  className="absolute top-2 right-3 text-lg text-gray-500 hover:text-gray-700 font-bold transition"
>
  ×
</button>



      {currentQuestion.image && imageMap[currentQuestion.image] && (
        <div className="flex justify-center mb-4">
          <img
  src={imageMap[currentQuestion.image]}
  alt="문제 이미지"
  className="max-h-[400px] object-contain"
/>

        </div>
      )}
      <p
        className={`whitespace-pre-line font-bold ${
          showAnswer ? "text-xl sm:text-2xl text-green-800" : "text-base sm:text-lg"
        } min-h-[60px]`}
      >
        {showAnswer ? currentQuestion.answer : currentQuestion.question}
      </p>

      {showAnswer ? (
        <button
          className="mt-5 px-6 py-2 bg-green-600 text-white font-bold text-sm rounded-full shadow-md hover:bg-green-700 transition"
          onClick={() => setShowAssignModal(true)}
        >
          ✅ 점수 주기
        </button>
      ) : (
        <button
          className="mt-5 px-6 py-2 bg-yellow-500 text-red-900 font-bold text-sm rounded-full shadow-md hover:bg-yellow-600 transition"
          onClick={() => setShowAnswer(true)}
        >
          정답 보기
        </button>
      )}
    </div>
  </div>
)}


      {showAssignModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[1001] px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(4px)" }}
        >
          <div className="bg-white p-8 rounded-3xl border-4 border-green-500 shadow-2xl max-w-md w-full text-center">
            <h4 className="text-lg font-bold text-green-800 mb-4">👑 점수 줄 팀을 선택하세요</h4>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 justify-items-center">
              {teamScores.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTeam(i)}
                  className={`w-14 h-14 flex items-center justify-center rounded-full text-sm font-bold border-2 transition-all duration-200 
                    ${
                      selectedTeam === i
                        ? "bg-green-500 text-white border-green-700 scale-110"
                        : "bg-yellow-200 text-red-800 border-yellow-400 hover:bg-yellow-300"
                    }`}
                >
                  {i + 1}조
                </button>
              ))}
            </div>

            <button
  className="w-full py-3 mt-5 bg-green-600 hover:bg-green-700 text-white text-base font-bold rounded-xl shadow-md transition"
  onClick={handleScoreAssign}
>
  ✅ 점수 부여
</button>

<button
  className="w-full py-3 mt-3 bg-pink-100 hover:bg-pink-200 text-pink-700 font-semibold text-base rounded-xl shadow-sm transition"
  onClick={() => setShowAssignModal(false)}
>
  ❌ 닫기
</button>



          </div>
        </div>
      )}
    </div>
  );
}
