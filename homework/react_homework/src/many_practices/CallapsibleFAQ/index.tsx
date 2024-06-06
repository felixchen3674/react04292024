import React, { useState } from "react";
import QuestionAndAnswer from "./components/QuestionAndAnswer";
import "./index.css";

type QuestionWithAnswer = {
  question: string;
  answer: string;
};

const initialQuestions: QuestionWithAnswer[] = [
  { question: "Do you wanna paly", answer: "yes" },
  { question: "Do you like party", answer: "Not really" },
  {
    question: "Do you have a girlfriend or boyfriend",
    answer: "No, Im single",
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
      alert("either question or answer is empty");
    }
    setQuestionAnswerList((prev) => [
      ...prev,
      { question: inputQuestion, answer: inputAnswer },
    ]);
    setInputQuestion("");
    setInputAnswer("");
  };

  const handleDelete = (id: number) => {
    return () => {
      setQuestionAnswerList((prev) => prev.filter((_, index) => index !== id));
    };
  };
  return (
    <>
      {questionAnswerList.map((qa, index) => {
        return (
          <QuestionAndAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
            handleDelete={handleDelete(index)}
          />
        );
      })}
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-form-user-input">
          <label>
            <input
              type="text"
              placeholder="input question"
              value={inputQuestion}
              onChange={handleInputQuestion}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="input answer"
              value={inputAnswer}
              onChange={handleInputAnswer}
            />
          </label>
        </div>
        <button>ADD</button>
      </form>
    </>
  );
}
