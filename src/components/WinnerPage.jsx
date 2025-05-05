// src/pages/WinnerPage.jsx
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export default function WinnerPage() {
  const { search } = useLocation();
  const [width, height] = useWindowSize();

  const query = new URLSearchParams(search);
  const team = query.get("team");
  const score = query.get("score");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-center relative">
      <Confetti width={width} height={height} numberOfPieces={300} />
      <h1 className="text-5xl font-extrabold text-purple-700 mb-6">🎉 축하합니다!</h1>
      <p className="text-3xl text-green-700 font-bold">{team}조가 최종 우승했습니다!</p>
      <p className="mt-2 text-xl text-gray-700">총 {score}점으로 1등이에요 👑</p>
    </div>
  );
}
