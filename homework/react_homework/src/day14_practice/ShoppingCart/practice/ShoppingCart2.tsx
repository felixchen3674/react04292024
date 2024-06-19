import React, { Component } from "react";
import { Items } from "./ItemList";
import { itemType } from "../ShoppingCartWithClass";

export default class ShoppingCart2 extends Component<
  {},
  { items: itemType[] }
> {
  constructor(props) {
    super(props);
    this.state = {
      items: Items,
    };
  }

  handleDecrement = (id: number) => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      if (item.id === id && item.quantity > 0) {
        const newItem = { ...item };
        newItem.quantity = item.quantity - 1;
        return newItem;
      } else {
        return item;
      }
    });
    this.setState({ items: newItems });
  };
  handleIncrement = (id: number) => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        newItem.quantity = item.quantity + 1;
        return newItem;
      } else {
        return item;
      }
    });
    this.setState({ items: newItems });
  };
  handleEmpty = () => {
    const { items } = this.state;
    const newItems = items.map((item) => {
      const newItem = { ...item };
      newItem.quantity = 0;
      return newItem;
    });
    this.setState({ items: newItems });
  };
  render() {
    const { items } = this.state;
    const totalPrice = items
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                const { id, name, price, quantity } = item;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{price}</td>
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
        <div>
          <h4>Total Price:{totalPrice}</h4>
        </div>
        <div>
          <button onClick={this.handleEmpty}>Check out</button>
          <button onClick={this.handleEmpty}>Empty Cart</button>
        </div>
      </div>
    );
  }
}
