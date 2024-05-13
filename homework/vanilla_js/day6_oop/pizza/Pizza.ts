// Create a Pizza class that takes in a size and an array of topping codes.
// The class should have the following methods:
// - getBaseCost(): returns the base cost of the pizza based on the size.
// - getTotalCost(): returns the total cost of the pizza including the base cost and the cost of the toppings.
// - getDescription(): returns a string that describes the pizza in the following format:
//   "A {size} pizza with {topping1}, {topping2}, {topping3}."
//   Example: "A medium pizza with pepperoni, green pepper."

// size: "small", "medium", "large"
// their costs: 6.5, 7.5, 8.5

// Example toppingCodes
// {
//   p: { cost: 1.5, name: "pepperoni" },
//   g: { cost: 0.86, name: "green pepper" },
// };

export const BASE_PRICE = {
  small: 6.5,
  medium: 7.5,
  large: 8.5,
};

interface Topping {
  cost: number;
  name: string;
}

export const TOPPINGS: Record<string, Topping> = {
  p: { cost: 1.5, name: "pepperoni" },
  g: { cost: 0.86, name: "green pepper" },
  o: { cost: 0.5, name: "onion" },
  bo: { cost: 0.2, name: "black olive" },
  m: { cost: 0.82, name: "mushroom" },
  c: { cost: 0.77, name: "cheese" },
};

export default class Pizza {
  size: string;
  toppingCodes: string[];

  constructor(size: string, toppingCodes: string[]) {
    this.size = size;
    this.toppingCodes = toppingCodes;
  }

  getBaseCost(): number {
    return BASE_PRICE[this.size]
  }
// MDN property accessors
// const person1 = {};
// person1['firstname'] = 'Mario';
// person1['lastname'] = 'Rossi';

// console.log(person1.firstname);
// // Expected output: "Mario"
// console.log(person1['lastname']);
// // Expected output: "Rossi"

// const person2 = {
//   firstname: 'John',
//   lastname: 'Doe',
// };
// console.log(person2['lastname']);
// Expected output: "Doe"

  getTotalCost(): number {
    const baseCost = this.getBaseCost()
    const toppingCost = this.toppingCodes.reduce((accumulator, code) =>{
      const topping = TOPPINGS[code]?.cost || 0;
      return accumulator + topping;
    }, 0)
    return baseCost + toppingCost;
  }

  //    pizza2 = new Pizza("large", ["cheese", "tomato", "pepperoni"]);
  //                                     SIZE ,     toppingCodes
  //                                                    'code', 'code', 'code'

  getDescription(): string {
    const toppings = this.toppingCodes.map(code => TOPPINGS[code].name).join(', ');
    return `A ${this.size} pizza with ${toppings}.`;
  }
}