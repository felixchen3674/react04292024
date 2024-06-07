import React, { useState } from "react";

export default function Answer({
  answers,
  id,
  setPageNumber,
  pageNumber,
  count,
  setResult,
  setCounter,
  counter,
}) {
  const [selectAnswer, setSelectAnswer] = useState("");
  const [quizDone, setQuizDone] = useState(false);
  const handleSelectAnswer = (e) => {
    setSelectAnswer(e.target.value);
  };

  const handleAnswer = () => {
    if (quizDone) {
      return;
    }
    if (!selectAnswer) {
      alert("Please choose a answer");
      return;
    }
    let res = "";
    let newCounter = counter;
    if (selectAnswer === "true") {
      res = "Your previous answer was correct";
      newCounter = counter + 1;
      setCounter(newCounter);
    } else {
      res = "Your previous answer was wrong";
    }
    console.log(counter);
    if (pageNumber === count) {
      setResult(`Quiz completed! You scored ${newCounter} of${count} `);
      setQuizDone(true);
    } else {
      setResult(res);
      setPageNumber((pre) => pre + 1);
    }
  };

  return (
    <div>
      <div>
        {answers.map((item, index) => {
          const { answer, isCorrect } = item;
          return (
            <label key={index}>
              <input
                type="radio"
                value={isCorrect}
                name={`QA${id}`}
                onChange={handleSelectAnswer}
              />
              {answer}
            </label>
          );
        })}
      </div>
      <div>
        <button onClick={handleAnswer}>Submit</button>
      </div>
    </div>
  );
}
