import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Faker from "./components/Faker";
import Results from "./components/Results";
import "./index.css";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [resultsTitle, setResultsTitle] = useState();
  const [resultsImage, setResultsImage] = useState();
  return (
    <div className="app">
      {showHome && <Home setShowHome={setShowHome} setShowQuiz={setShowQuiz} />}
      {showQuiz && (
        <Faker
          setShowQuiz={setShowQuiz}
          setShowResults={setShowResults}
          setResultsTitle={setResultsTitle}
          setResultsImage={setResultsImage}
        />
      )}
      {showResults && (
        <Results
          resultsTitle={resultsTitle}
          resultsImage={resultsImage}
          setShowResults={setShowResults}
          setShowHome={setShowHome}
        />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
