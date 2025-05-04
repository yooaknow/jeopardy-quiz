import React from "react";
import introImage from "../assets/첫화면.png";

export default function IntroScreen({ onStart }) {
  return (
    <div className="w-full h-screen relative">
      <img
        src={introImage}
        alt="유학생의 밤"
        className="w-full h-full object-cover"
      />
      <button
        onClick={onStart}
        className="absolute top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   bg-yellow-500 text-white text-2xl font-extrabold px-10 py-5 
                   rounded-full shadow-lg hover:bg-yellow-600 transition"
      >
        시작하기
      </button>
    </div>
  );
}
