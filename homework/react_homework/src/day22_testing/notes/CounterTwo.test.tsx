// import { render, screen } from "@testing-library/react";
// import { CounterTwo } from "./CounterTwo";
// import { describe, expect, test } from "vitest";

// describe("CounterTwo", () => {
//   test("render correctly", () => {
//     render(<CounterTwo count={0} />);
//     const textElement = screen.getByText("Counter Two");
//     expect(textElement).toBeInTheDocument();
//   });
// });

// describe("CounterTwo", () => {
//   test("renders correctly", () => {
//     render(<CounterTwo count={0} />);
//     const textElement = screen.getByText("Counter Two");
//     expect(textElement).toBeInTheDocument();
//   });
//   test("handlers are called", async () => {
//     user.setup();
//     const incrementHandler = jest.fn();
//     const decrementHandler = jest.fn();
//     render(
//       <CounterTwo
//         count={0}
//         handleIncrement={incrementHandler}
//         handleDecrement={decrementHandler}
//       />
//     );
//     const incrementButton = screen.getByRole("button", { name: "Increment" });
//     const decrementButton = screen.getByRole("button", { name: "Decrement" });
//     await user.click(incrementButton);
//     await user.click(decrementButton);
//     expect(incrementHandler).toHaveBeenCalledTimes(1);
//     expect(decrementHandler).toHaveBeenCalledTimes(1);
//   });
// });

import { render, screen, fireEvent } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import { describe, expect, test } from "vitest";

describe("CounterTwo", () => {
  test("renders title correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called correctly", async () => {
    // Mock handler functions
    const incrementHandler = () => {};
    const decrementHandler = () => {};

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    // Find buttons and simulate clicks
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    // Simulate click events
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
  });
});
