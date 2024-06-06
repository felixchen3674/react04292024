import React, { useState, memo } from "react";
import "./index.css";

interface QuestionAndAnswerProps {
  question: string;
  answer: string;
  handleDelete: () => void;
}

const QuestionAndAnswer = memo(
  ({ question, answer, handleDelete }: QuestionAndAnswerProps) => {
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
);

export default QuestionAndAnswer;
