import React, { useState } from "react";
import { QAList } from "./QAList";
import RadioInput from "./RadioInput";

export default function QuizApp() {
  const questions = QAList;
  const { length } = questions;
  const [page, setPage] = useState(0);
  const { answers } = questions[page];
  return (
    <div>
      <h2>{questions[page].question}</h2>
      <RadioInput
        answers={answers}
        setPage={setPage}
        length={length}
        page={page}
      />
    </div>
  );
}
