// Create an Order class that takes in an array of Pizza instances and has the following methods:
// - addPizza(pizza): adds a pizza to the order.
// - removePizza(index): removes a pizza from the order at the given index.
// - getTotalCost(): returns the total cost of all pizzas in the order.
// - updateStatus(newStatus): updates the status of the order.
// The Order class should have the following properties:
// - pizzas: an array of Pizza instances.
// - status: a string representing the status of the order. Default value is "pending".

type Pizza = {
  getTotalCost(): number; // Assume each Pizza object has a method to return its total cost
};
type OrderStatus = 'pending' | 'confirmed' | 'delivered' | 'canceled';

export default class Order {
  private pizzas: Pizza[];
  private status: OrderStatus;
  constructor() {
    this.pizzas = [];
    this.status = 'pending';
  }

  addPizza(pizza: Pizza): void {
    this.pizzas.push(pizza);
  }

  removePizza(index: number): void {
    if (index < 0 || index >= this.pizzas.length) {
      throw new Error('Invalid index.');
    }
    this.pizzas.splice(index, 1);
  }

  getTotalCost(): number {
    return this.pizzas.reduce((acc, pizza) => acc + pizza.getTotalCost(), 0);
  }

  updateStatus(newStatus: OrderStatus) {
    this.status = newStatus;
  }
}
