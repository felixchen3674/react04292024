import { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function CollapsibleFAQ() {
  const initialFAQs: FAQ[] = [
    {
      id: "1",
      question: "What is promise?",
      answer:
        "Promise is an object that handles asynchronous operations. It is designed to deal with codes that take time to execute.",
    },
    {
      id: "2",
      question: "What is useState?",
      answer:
        "useState is a React hook that allows you to add state to components. It takes 2 elements, one, the current state value, two, the function that will update that state value.",
    },
    {
      id: "3",
      question: "What is custom hooks",
      answer:
        "Custom hooks allow you to create reusable state and lifecycle logic specifically for functional components. This will help to avoid HOC hell which is when you nest too many HOCs inside other HOCs.",
    },
  ];

  const [faqList, setFaqList] = useState<FAQ[]>(initialFAQs); // Use initial data

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
      <h2>Frequently Asked Questions</h2>
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
