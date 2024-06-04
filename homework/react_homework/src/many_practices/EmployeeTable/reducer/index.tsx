import { ADD_EMPLOYEE, EDIT_SALARY, EDIT_DISABLED } from "../constants";

export type EmployeeType = {
  id: number;
  name: string;
  position: string;
  salary: string;
  isDisabled: boolean;
};

type StateType = EmployeeType[];

type ADD_EMPLOYEE_TYPE = {
  type: typeof ADD_EMPLOYEE;
  payload: EmployeeType;
};

type EDIT_SALARY_TYPE = {
  type: typeof EDIT_SALARY;
  payload: { id: number; newSalary: string };
};

type EDIT_DISABLED_TYPE = {
  type: typeof EDIT_DISABLED;
  payload: number;
};

type ActionType = ADD_EMPLOYEE_TYPE | EDIT_SALARY_TYPE | EDIT_DISABLED_TYPE;

const initialState: StateType = [];

const employeeTableReducer = (
  employees: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...employees, action.payload];
    case EDIT_SALARY:
      return employees.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, salary: action.payload.newSalary }
          : employee
      );
    case EDIT_DISABLED:
      return employees.map((employee) =>
        employee.id === action.payload
          ? { ...employee, isDisabled: !employee.isDisabled }
          : employee
      );
    default:
      return employees;
  }
};

const add_employee = (newEmployee: EmployeeType): ADD_EMPLOYEE_TYPE => {
  return {
    type: ADD_EMPLOYEE,
    payload: newEmployee,
  };
};

const edit_salary = (id: number, newSalary: string): EDIT_SALARY_TYPE => {
  return {
    type: EDIT_SALARY,
    payload: { id, newSalary },
  };
};

const edit_disabled = (id: number): EDIT_DISABLED_TYPE => {
  return {
    type: EDIT_DISABLED,
    payload: id,
  };
};

export { employeeTableReducer, add_employee, edit_salary, edit_disabled };
