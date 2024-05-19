import { Component, ReactNode } from "react";

interface itemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
const items: itemType[] = [
  { id: 1, name: "apple", price: 0.99, quantity: 0 },
  { id: 2, name: "banana", price: 1.99, quantity: 0 },
  { id: 3, name: "mango", price: 2.99, quantity: 0 },
  { id: 4, name: "orange", price: 3.99, quantity: 0 },
];

type StateType = {
  items: itemType[];
};
export class ShoppingCart extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: items,
    };
  }
  handleDecrement = (id: number) => {
    const newItems = this.state.items.map((item) => {
      if (item.id === id) {
        if (item.quantity > 0) {
          const newItem = { ...item };
          newItem.quantity--;
          return newItem;
        }
      }
      return item;
    });
    this.setState({ items: newItems });
  };
  handleIncrement = (id: number) => {
    const newItems = this.state.items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        newItem.quantity++;
        return newItem;
      }
      return item;
    });
    this.setState({ items: newItems });
  };
  handleClearOut = () => {
    const newItems = this.state.items.map((item) => {
      if (item.quantity !== 0) {
        const newItem = { ...item };
        newItem.quantity = 0;
        return newItem;
      }
      return item;
    });
    this.setState({ items: newItems });
  };

  render(): ReactNode {
    const { items } = this.state;
    const totalPrice = items
      .reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
      }, 0)
      .toFixed(2);
    return (
      <div>
        <div id="tableContainer">
          <table>
            <thead>
              <th>Name:</th>
              <th>Price:</th>
              <th>Action:</th>
            </thead>
            <tbody>
              {items &&
                items.map((item) => {
                  const { id, name, price, quantity } = item;
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>${price}</td>
                      <td>
                        <button onClick={() => this.handleDecrement(id)}>
                          -
                        </button>
                        {quantity}
                        <button onClick={() => this.handleIncrement(id)}>
                          +
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Total Price: {totalPrice}</h2>
        </div>
        <div>
          <button>CheckOut</button>
          <button onClick={this.handleClearOut}>EmptyCart</button>
        </div>
      </div>
    );
  }
}
