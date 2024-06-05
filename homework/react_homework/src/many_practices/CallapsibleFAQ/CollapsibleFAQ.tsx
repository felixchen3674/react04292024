import { useState } from "react";

export default function CollapsibleFAQ() {
  const initialFAQs = [
    { question: 'What is promise?', answer: 'Promise is an object that handles asynchronous operations. It is designed to deal with codes that take time to execute.' },
    { question: 'What is useState?', answer: 'useState is a React hook that allows you to add state to components. It takes 2 elements, one, the current state value, two, the function that will update that state value.' },
    { question: 'What is custom hooks', answer: 'Custom hooks allow you to create reusable state and lifecycle logic specifically for functional components. This will help to avoid HOC hell which is when you nest too many HOCs inside other HOCs.' },
  ];
  const [faqList, setFaqList] = useState(initialFAQs);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFAQClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleAddFAQ = (event) => {
    event.preventDefault();
    const newQuestion = event.target.question.value;
    const newAnswer = event.target.answer.value;

    if (!newQuestion || !newAnswer) {
      alert('Please add both question and answer');
      return;
    }

    setFaqList([...faqList, { question: newQuestion, answer: newAnswer }]);
    event.target.question.value = '';
    event.target.answer.value = '';
  };

  const handleDelete = (index: number) => {
    const updatedList = [...faqList];
    updatedList.splice(index, 1);
    setFaqList(updatedList);
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqList.map((faq, index) => (
        <div key={index} className={activeIndex === index ? 'open' : 'closed'}>
          <button type="button" onClick={() => handleFAQClick(index)}>
            {faq.question} {activeIndex === index ? '-' : '+'}
          </button>
          <div>{activeIndex === index && faq.answer}</div>
          <button type="button" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <form onSubmit={handleAddFAQ}>
        <label htmlFor="question">Question:</label>
        <input type="text" id="question" name="question" placeholder="Enter your question" />
        <label htmlFor="answer">Answer:</label>
        <input type="text" id="answer" name="answer" placeholder="Enter your answer" />
        <button type="submit">Add FAQ</button>
      </form>
    </div>
  );
};