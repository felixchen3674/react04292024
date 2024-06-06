import React, { useState } from "react";

export default function AddQA({ setList }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const addBtnStatus = question.trim() === "" || answer.trim() === "";
  const handleAdd = () => {
    const newQA = { question, answer };
    setList((pre) => [...pre, newQA]);
    setQuestion("");
    setAnswer("");
  };
  return (
    <div className="addContainer">
      <div className="textContainer">
        <textarea
          placeholder="Enter The Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <textarea
          placeholder="Enter The Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleAdd} disabled={addBtnStatus}>
          Add
        </button>
      </div>
    </div>
  );
}
