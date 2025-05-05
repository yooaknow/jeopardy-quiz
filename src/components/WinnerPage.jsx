// src/pages/WinnerPage.jsx
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import backgroundImage from "../assets/게임배경.png";

export default function WinnerPage() {
  const { search } = useLocation();
  const [width, height] = useWindowSize();

  const query = new URLSearchParams(search);
  const team = query.get("team");
  const score = query.get("score");
  const secondTeam = query.get("secondTeam");
  const secondScore = query.get("secondScore");
  const thirdTeam = query.get("thirdTeam");
  const thirdScore = query.get("thirdScore");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center relative text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Confetti
        width={width}
        height={height}
        numberOfPieces={120}
        gravity={0.1}
        recycle={false}
      />

      {/* 우승팀 디자인 */}
      <div className="bg-gradient-to-r from-[#f9f7f7] to-[#fff8e1] p-8 rounded-lg shadow-xl mb-6 border-4 border-[#C04000] w-full sm:w-3/4 lg:w-2/3">
        <p className="text-4xl sm:text-5xl font-semibold text-[#8B2E16] mb-4">
          축하합니다!
        </p>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#C04000] mb-4">
          🎉 <span className="font-extrabold">{team}조</span>가 최종 우승했습니다! 🎉
        </h1>

        <p className="text-2xl sm:text-3xl font-medium text-[#5A1F0F] mb-4">
          (총 <span className="text-[#C04000] font-bold">{score}점</span>)
        </p>

        <p className="text-lg sm:text-xl text-black opacity-90 italic mt-6">
          Team {team} takes the final victory with {score} points. Congratulations!
        </p>
      </div>

      {/* 2등과 3등 디자인 */}
      <div className="mt-8 text-center w-full sm:w-3/4 lg:w-2/3">
        <p className="text-xl sm:text-2xl text-[#B26F3B] mb-2 font-medium">
          2등 - {secondTeam}조 ({secondScore}점)
        </p>

        <p className="text-xl sm:text-2xl text-[#8B2E16] mb-2 font-medium">
          3등 - {thirdTeam}조 ({thirdScore}점)
        </p>
      </div>
    </div>
  );
}
