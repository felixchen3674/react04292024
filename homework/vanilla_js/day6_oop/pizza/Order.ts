// Create an Order class that takes in an array of Pizza instances and has the following methods:
// - addPizza(pizza): adds a pizza to the order.
// - removePizza(index): removes a pizza from the order at the given index.
// - getTotalCost(): returns the total cost of all pizzas in the order.
// - updateStatus(newStatus): updates the status of the order.
// The Order class should have the following properties:
// - pizzas: an array of Pizza instances.
// - status: a string representing the status of the order. Default value is "pending".
import Pizza from './Pizza';
export default class Order {
  pizzas: Pizza[];
  status: string;

  constructor() {
    this.pizzas = [];
    this.status = "pending";
  }

  addPizza(pizza: Pizza) {
    this.pizzas.push(pizza);
  }

  removePizza(index: number) {
    if(index < this.pizzas.length && index >=0){
      this.pizzas.splice(index, 1)
    }
  }

  getTotalCost(): number {
    return this.pizzas.reduce((total, pizza) => total + pizza.getTotalCost(), 0);
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
  }
}
