import React from "react";

export default function FeedBack({ score, quizEnd, result, length }) {
  return (
    <div>
      {quizEnd
        ? `Quiz completed.You scored ${score} of ${length}`
        : result
        ? `The Previous Answer was ${result}`
        : null}
    </div>
  );
}
