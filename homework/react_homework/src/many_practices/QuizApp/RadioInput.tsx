import React, { useState } from "react";
import FeedBack from "./FeedBack";

export default function RadioInput({ answers, setPage, length, page }) {
  const [answer, setAnswer] = useState("");
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");

  const handleOnSubmit = () => {
    if (quizEnd) return;
    if (answer === "") {
      alert("You need to choose one answer");
      return;
    }

    if (answer === "true") {
      setScore((pre) => pre + 1);
    }
    if (length === page + 1) {
      setQuizEnd(true);
    } else {
      setPage((pre) => pre + 1);
    }
    setResult(answer);
    setAnswer("");
  };

  return (
    <div>
      {answers.map((item) => {
        const { answer, isCorrect } = item;
        return (
          <label key={answer}>
            <input
              type="radio"
              name="answer"
              value={isCorrect}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {answer}
          </label>
        );
      })}
      <div>
        <button onClick={handleOnSubmit}>Submit</button>
      </div>
      <FeedBack
        score={score}
        quizEnd={quizEnd}
        result={result}
        length={length}
      />
    </div>
  );
}
