import React, { useState, useCallback } from "react";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import "./index.css";

type QuestionWithAnswer = {
  id: number;
  question: string;
  answer: string;
};

const initialQuestions: QuestionWithAnswer[] = [
  { id: 1, question: "Do you wanna play?", answer: "Yes" },
  { id: 2, question: "Do you like parties?", answer: "Not really" },
  {
    id: 3,
    question: "Do you have a girlfriend or boyfriend?",
    answer: "No, I'm single",
  },
];

export default function CollapsibleFAQ() {
  const [questionAnswerList, setQuestionAnswerList] =
    useState<QuestionWithAnswer[]>(initialQuestions);
  const [inputQuestion, setInputQuestion] = useState<string>("");
  const [inputAnswer, setInputAnswer] = useState<string>("");

  const handleInputQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuestion(e.target.value);
  };

  const handleInputAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputQuestion === "" || inputAnswer === "") {
      alert("Both question and answer must be filled out.");
      return;
    }
    setQuestionAnswerList((prev) => [
      ...prev,
      { id: Date.now(), question: inputQuestion, answer: inputAnswer },
    ]);
    setInputQuestion("");
    setInputAnswer("");
  };

  const handleDelete = useCallback((id: number) => {
    setQuestionAnswerList((prev) => prev.filter((qa) => qa.id !== id));
  }, []);

  return (
    <>
      {questionAnswerList.map((qa) => (
        <QuestionAndAnswer
          key={qa.id}
          question={qa.question}
          answer={qa.answer}
          handleDelete={() => handleDelete(qa.id)}
        />
      ))}
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-form-user-input">
          <label>
            <input
              type="text"
              placeholder="Input question"
              value={inputQuestion}
              onChange={handleInputQuestion}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Input answer"
              value={inputAnswer}
              onChange={handleInputAnswer}
            />
          </label>
        </div>
        <button type="submit">ADD</button>
      </form>
    </>
  );
}
