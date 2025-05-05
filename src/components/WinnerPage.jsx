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

<p className="text-4xl sm:text-5xl font-semibold text-[#8B2E16] mb-4">
  축하합니다!
</p>


<h1 className="text-4xl sm:text-5xl font-bold text-[#5A1F0F] mb-4">
  🎉 <span className="text-6xl sm:text-7xl font-extrabold text-[#C04000]">{team}조</span>가 최종 우승했습니다! 🎉
</h1>

<p className="text-base sm:text-lg font-medium text-[#5A1F0F] mt-5 mb-4">
  (총 <span className="text-[#C04000] font-bold">{score}점</span>)
</p>

<p className="text-base sm:text-lg text-black opacity-90 italic mt-6">
  Team {team} takes the final victory with {score} points. Congratulations!
</p>




    </div>
  );
}
