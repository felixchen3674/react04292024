import React, { useState } from "react";

export default function RenderQAList({ list, setList }) {
  const [openWindowId, setOpenWindowId] = useState("");

  const handleOpenWindow = (question) => {
    setOpenWindowId(question);
  };
  const handleCloseWindow = () => {
    setOpenWindowId("");
  };

  const handleDelete = (question) => {
    const newList = list.filter((item) => item.question !== question);
    setList(newList);
  };
  return (
    <div>
      {list &&
        list.map((item) => {
          const { question, answer } = item;
          return (
            <div key={question}>
              <div className="questionContainer">
                <h4>{question}</h4>
                {openWindowId !== question ? (
                  <button onClick={() => handleOpenWindow(question)}>+</button>
                ) : (
                  <button onClick={handleCloseWindow}>-</button>
                )}
              </div>
              {openWindowId === question ? (
                <div className="answerContainer">
                  <p>{answer}</p>
                  <button onClick={() => handleDelete(question)}>Delete</button>
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}
