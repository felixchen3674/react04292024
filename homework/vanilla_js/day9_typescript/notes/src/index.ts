// const i: number = 1;
// console.log(i);
// let nums: number[] = [1, 2, 3];
// let user: [number, string] = [1, 'zhe'];
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Large;
// console.log(mySize);

// function calculateTax(income: number): number {
//   if (income < 50_000) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }
// console.log(calculateTax(500000));

// type Employee = {
//   readonly id: number;
//   name: string;
// }; // Reuse type of objects
// let employee: Employee = { id: 1, name: '' };

// console.log(employee);
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

//Typescript Generitic

// function identity(arg: number): number {
//   return arg;
// }
// function identity(arg: any): any {
//   return arg;
// }

// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }
// const numbers = [1, 2, 3];
// const firstNum = getFirstElement<number>(numbers);
// const strings = ['sasd', 'asd'];
// const firstString = getFirstElement(strings);

// type ApiRes<Data> = {
//   data: Data;
//   isError: boolean;
// };
// type UserRes = ApiRes<{ name: string; age: number }>;
// type BlogRes = ApiRes<{ title: string }>;
// const res: UserRes = {
//   data: {
//     name: 'zhe',
//     age: 55,
//   },
//   isError: false,
// };
