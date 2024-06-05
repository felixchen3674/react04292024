import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, test } from "vitest";
import EmployeeTable from "../";
import { useSelector, useDispatch } from "react-redux";

// Mocking the `react-redux` module
vi.mock("react-redux", () => ({
  useSelector: vi.fn(), // Mocking useSelector
  useDispatch: vi.fn(), // Mocking useDispatch
}));

// Mock data for the employee table
const mockEmployeeTable = [
  {
    id: 1,
    name: "John Doe",
    position: "Developer",
    salary: "1000",
    isDisabled: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    salary: "1200",
    isDisabled: true,
  },
];

describe("EmployeeTable", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    // Mock implementation for useSelector
    (useSelector as vi.Mock).mockImplementation((selectorFn) =>
      selectorFn({
        employeeTable: mockEmployeeTable,
      })
    );
    // Mock implementation for useDispatch
    (useDispatch as vi.Mock).mockReturnValue(mockDispatch);
    // Clear the mock dispatch function before each test
    mockDispatch.mockClear();
  });

  test("renders the employee table", () => {
    render(<EmployeeTable />);

    // Check if table headers are rendered
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Position/i)).toBeInTheDocument();
    expect(screen.getByText(/Salary/i)).toBeInTheDocument();
    expect(screen.getByText(/Action/i)).toBeInTheDocument();

    // Check if employee rows are rendered
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Developer/i)).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/Designer/i)).toBeInTheDocument();
    expect(screen.getByText("1200")).toBeInTheDocument();
  });

  test("enables Add button when all input fields are filled", () => {
    render(<EmployeeTable />);

    const addButton = screen.getByText(/Add/i);

    // Initially, the Add button should be disabled
    expect(addButton).toBeDisabled();

    // Fill in all input fields
    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Position/i), {
      target: { value: "Manager" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Salary/i), {
      target: { value: "1500" },
    });

    // The Add button should be enabled
    expect(addButton).toBeEnabled();
  });

  test("allows editing salary and saving it", () => {
    render(<EmployeeTable />);

    const salaryCell = screen.getByText("1000");

    // Click on the salary cell to enable editing
    fireEvent.click(salaryCell);

    // Check if the input field is displayed with the correct value
    const salaryInput = screen.getByDisplayValue("1000");
    expect(salaryInput).toBeInTheDocument();

    // Change the salary value
    fireEvent.change(salaryInput, { target: { value: "1100" } });
    fireEvent.blur(salaryInput); // Trigger onBlur event

    // Check if the dispatch was called with the correct arguments
    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
      type: "EDIT_DISABLED",
      payload: 1,
    });
    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
      type: "EDIT_SALARY",
      payload: { id: 1, newSalary: "1100" },
    });
    expect(mockDispatch).toHaveBeenNthCalledWith(3, {
      type: "EDIT_DISABLED",
      payload: 1,
    });
  });

  test("adds a new employee when Add button is clicked", () => {
    render(<EmployeeTable />);

    // Fill in all input fields
    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Position/i), {
      target: { value: "Manager" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Salary/i), {
      target: { value: "1500" },
    });

    // Click on the Add button
    fireEvent.click(screen.getByText(/Add/i));

    // Check if the dispatch was called with the correct arguments
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_EMPLOYEE",
      payload: {
        id: 3,
        name: "Alice",
        position: "Manager",
        salary: "1500",
        isDisabled: true,
      },
    });

    // Check if the input fields are cleared
    expect(screen.getByPlaceholderText(/Name/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Position/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Salary/i)).toHaveValue("");
  });
});
