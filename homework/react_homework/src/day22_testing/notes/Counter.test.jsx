import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import React from "react";
import { describe, expect, test } from "vitest";

describe("Counter Component", () => {
  test("displays the correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  test("displays the correct initial count", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);

    const incrementButton = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });
});
