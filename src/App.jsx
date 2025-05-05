import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import QuizBoard from "./components/QuizBoard";
import IntroScreen from "./components/IntroScreen";
import WinnerPage from "./components/WinnerPage";

function HomeRouter() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroScreen onStart={() => setShowIntro(false)} />
  ) : (
    <QuizBoard />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/winner" element={<WinnerPage />} />
      </Routes>
    </Router>
  );
}
