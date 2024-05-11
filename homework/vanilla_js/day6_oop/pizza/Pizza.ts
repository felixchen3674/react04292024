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

type BasePrice = Record<string, number>;

export const BASE_PRICE: BasePrice = {
  small: 6.5,
  medium: 7.5,
  large: 8.5,
};

type Data = {
  cost: number;
  name: string;
};
type Toppings = Record<string, Data>;

export const TOPPINGS: Toppings = {
  p: { cost: 1.5, name: "pepperoni" },
  g: { cost: 0.86, name: "green pepper" },
  o: { cost: 0.5, name: "onion" },
  bo: { cost: 0.2, name: "black olive" },
  m: { cost: 0.82, name: "mushroom" },
  c: { cost: 0.77, name: "cheese" },
};

export default class Pizza {
  private size: string;
  private toppingCodes: string[];
  constructor(pizzaSize: string, toppingName: string[]) {
    this.size = pizzaSize;
    this.toppingCodes = toppingName;
  }

  getBaseCost(): number {
    return BASE_PRICE[this.size] || 0;
  }

  getTotalCost(): number {
    const baseCost = this.getBaseCost();
    let totalToppingCost: number = 0;
    for (const code of this.toppingCodes) {
      const topping: Data = TOPPINGS[code];
      if (topping) {
        totalToppingCost += topping.cost;
      }
    }
    return baseCost + totalToppingCost;
  }

  getDescription(): string {
    const sizeName = this.size;
    const toppingString: string = this.toppingCodes
      .map((code) => TOPPINGS[code].name)
      .join(", ");
    return `A ${sizeName} pizza with ${toppingString}.`;
  }
}
