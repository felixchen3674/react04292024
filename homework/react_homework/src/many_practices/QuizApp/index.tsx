import React, { useState } from 'react';
import RadioInput from './components/RadioInput';
import './QuizApp.css';
interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}
const quizQuestions = [
  {
    id: 1,
    question: 'Which is biggest?',
    options: ['1', '2', '3', '4'],
    answer: '4',
  },
  {
    id: 2,
    question: 'Which is smallest?',
    options: ['1', '2', '3', '4'],
    answer: '1',
  },
  {
    id: 3,
    question: 'What is the capital of Germany?',
    options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
    answer: 'Berlin',
  },
  {
    id: 4,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
];

export default function QuizApp() {
  const [questions, setQuestions] = useState<Question[]>(quizQuestions);
  const [order, setOrder] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[order].answer) {
      setFeedback('Correct!');
      setScore(score + 1);
    } else {
      setFeedback('Incorrect!');
    }

    setTimeout(() => {
      setFeedback('');
      setSelectedOption('');
      if (order < questions.length - 1) {
        setOrder(order + 1);
      } else {
        setFeedback(
          `Quiz Complete! You scored ${
            score + (selectedOption === questions[order].answer ? 1 : 0)
          } out of ${questions.length}!`
        );
      }
    }, 2000);
  };

  return (
    <div>
      <h1>QuizApp</h1>
      <div>{questions[order].question}</div>
      <div>
        {questions[order].options.map((option, index) => (
          <RadioInput
            key={questions[order].id + index}
            option={option}
            id={questions[order].id + index}
            handleChange={handleChange}
            selectedOption={selectedOption}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div>{feedback}</div>
    </div>
  );
}
