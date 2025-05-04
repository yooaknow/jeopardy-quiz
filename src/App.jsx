import { useState } from "react";
import QuizBoard from "./components/QuizBoard";
import IntroScreen from "./components/IntroScreen";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroScreen onStart={() => setShowIntro(false)} />
  ) : (
    <QuizBoard />
  );
}
