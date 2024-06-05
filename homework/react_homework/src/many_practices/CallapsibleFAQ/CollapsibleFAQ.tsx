import { useState } from "react";
import { initialFAQs } from "./initialFAQs";
import { FAQ } from "./initialFAQs";

export default function CollapsibleFAQ() {

  const [faqList, setFaqList] = useState<FAQ[]>(initialFAQs);

  const handleAddFAQ = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newQuestion = event.target.question.value as string;
    const newAnswer = event.target.answer.value as string;

    if (!newQuestion || !newAnswer) {
      alert("Please add both question and answer");
      return;
    }

    const newId = Math.floor(Math.random() * 1000000).toString();

    setFaqList([
      ...faqList,
      { id: newId, question: newQuestion, answer: newAnswer },
    ]);
    event.target.question.value = "";
    event.target.answer.value = "";
  };

  const handleDelete = (id: string) => {
    const updatedList = faqList.filter((faq) => faq.id !== id);
    setFaqList(updatedList);
  };

  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const handleFAQClick = (id: string) => {
    if (id === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  return (
    <div>
      <h2>Interview Questions</h2>
      {faqList.map((faq) => (
        <div
          key={faq.id}
          className={activeIndex === faq.id ? "open" : "closed"}
        >
          <button type="button" onClick={() => handleFAQClick(faq.id)}>
            {faq.question} {activeIndex === faq.id ? "-" : "+"}
          </button>
          <div>{activeIndex === faq.id && faq.answer}</div>
          <button type="button" onClick={() => handleDelete(faq.id)}>
            Delete
          </button>
        </div>
      ))}
      <form onSubmit={handleAddFAQ}>
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Enter your question"
        />
        <label htmlFor="answer">Answer:</label>
        <input
          type="text"
          id="answer"
          name="answer"
          placeholder="Enter your answer"
        />
        <button type="submit">Add FAQ</button>
      </form>
    </div>
  );
}
