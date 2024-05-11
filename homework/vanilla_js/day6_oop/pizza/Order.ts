// Create an Order class that takes in an array of Pizza instances and has the following methods:
// - addPizza(pizza): adds a pizza to the order.
// - removePizza(index): removes a pizza from the order at the given index.
// - getTotalCost(): returns the total cost of all pizzas in the order.
// - updateStatus(newStatus): updates the status of the order.
// The Order class should have the following properties:
// - pizzas: an array of Pizza instances.
// - status: a string representing the status of the order. Default value is "pending".

import Pizza from "./Pizza";

export default class Order {
  private pizzas: Pizza[];
  public status: string;
  constructor() {
    this.pizzas = [];
    this.status = "pending";
  }

  addPizza(pizza: Pizza) {
    this.pizzas.push(pizza);
  }

  removePizza(index: number) {
    if (this.pizzas.length === 0 || index >= this.pizzas.length) {
      return;
    }
    this.pizzas.splice(index, 1);
  }

  getTotalCost(): number {
    let totalCost = 0;
    for (const pizza of this.pizzas) {
      totalCost += pizza.getTotalCost();
    }
    return totalCost;
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
  }
}
