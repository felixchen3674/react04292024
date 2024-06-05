export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const initialFAQs: FAQ[] = [
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
