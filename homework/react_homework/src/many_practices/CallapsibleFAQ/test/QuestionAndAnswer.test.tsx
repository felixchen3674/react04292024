import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import QuestionAndAnswer from "../components/QuestionAndAnswer";

describe("<QuestionAndAnswer/>", () => {
  const question = "Do you wanna play?";
  const answer = "Yes";
  const handleDelete = vi.fn();
  test("question and answer text", () => {
    render(
      <QuestionAndAnswer
        question={question}
        answer={answer}
        handleDelete={handleDelete}
      />
    );
    expect(screen.getByText(question)).toBeInTheDocument();
    expect(screen.getByText("DELETE")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  test("displays the answer when '+' button is clicked", () => {
    render(
      <QuestionAndAnswer
        question={question}
        answer={answer}
        handleDelete={handleDelete}
      />
    );
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText(answer)).toBeInTheDocument();
  });

  test("calls handleDelete when DELETE button is clicked", () => {
    render(
      <QuestionAndAnswer
        question={question}
        answer={answer}
        handleDelete={handleDelete}
      />
    );
    fireEvent.click(screen.getByText("DELETE"));
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });
});
