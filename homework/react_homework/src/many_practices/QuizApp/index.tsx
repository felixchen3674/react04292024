import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctOptionIndex: 2,
  },
  {
    question: "What is 1 + 2 ?",
    options: ["3", "4", "5", "6"],
    correctOptionIndex: 0,
  },
];

const QuizApp: React.FC = () => {
  // question index
  // score
  // selected index
  // feedback
  // completeion of the quiz
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [quizeComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (option: number) => {
    setSelectedIndex(option);
  };

  const handleSubmit = () => {
    // if the user hasnt select
    if (selectedIndex === null) {
      setFeedback("Please select an option");
      return;
    }

    // if use selected the correct answer
    if (selectedIndex === questions[questionIndex].correctOptionIndex) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback("Incorrect!");
    }

    // if we are at the end of the questions
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedIndex(null); // reset
    } else {
      setQuizComplete(true);
    }
  };

  return (
    <div>
      {quizeComplete ? (
        <div>
          You've completed your quiz! You scored {score} out of{" "}
          {questions.length}
        </div>
      ) : (
        <div>
          <div>questions[questionIndex].question</div>
          {questions[questionIndex].options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`option${index + 1}`}
                name={option}
                value={index}
                checked={selectedIndex === index}
                onChange={() => handleOptionChange(index)}
              />
              <label htmlFor={`option${index + 1}`}>{option}</label>
            </div>
          ))}
          <button onClick={handleSubmit}>Sumbit</button>
          {feedback && <div>{feedback}</div>}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
