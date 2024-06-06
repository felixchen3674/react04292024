import React, { useState } from "react";
import "./index.css";

interface QuestionAndAnswer {
  question: string;
  answer: string;
  handleDelete: () => void;
}

export default function QuestionAndAnswer({
  question,
  answer,
  handleDelete,
}: QuestionAndAnswer) {
  const [isAnswerDisplayed, setIsAnswerDisplayed] = useState<boolean>(false);

  const handleDisplayAnswer = () => {
    setIsAnswerDisplayed(true);
  };

  const handleHideAnswer = () => {
    setIsAnswerDisplayed(false);
  };
  return (
    <div className="question-and-answer">
      <div className="question">
        <button onClick={handleDisplayAnswer}>+</button>
        {question}
        <button onClick={handleHideAnswer}>-</button>
      </div>
      <div className={isAnswerDisplayed ? "answer" : "answer_hide"}>
        {answer}
        <button className="delete-button" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}
