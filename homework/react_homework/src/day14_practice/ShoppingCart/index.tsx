import React, { useState } from "react";
import ShoppingRow from "../ShoppingRow";
import "./index.css";

type ShoppingItem = {
  id: number;
  name: string;
  price: number;
  action: number;
};

const items = [
  { id: 1, name: "Apple", price: 0.99, action: 0 },
  { id: 2, name: "Banana", price: 0.49, action: 0 },
  { id: 3, name: "Mango", price: 1.99, action: 0 },
  { id: 4, name: "Strawberry", price: 2.49, action: 0 },
];

export default function ShoppingCart() {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>(items);
  const [totalPrice, setTotalPrice] = useState<number>();

  const handlePlus = (id: number) => {
    setShoppingList(
      shoppingList.map((shoppingItem) => {
        if (id === shoppingItem.id) {
          shoppingItem.action++;
          console.log(shoppingItem.action);
        }
        return shoppingItem;
      })
    );
  };

  const handleMinus = (id: number) => {
    setShoppingList(
      shoppingList.map((shoppingItem) => {
        if (id === shoppingItem.id) {
          if (shoppingItem.action > 0) {
            shoppingItem.action--;
          }
        }
        return shoppingItem;
      })
    );
  };

  const handleEmptyCart = () => {
    setShoppingList(
      shoppingList.map((shoppingItem) => {
        shoppingItem.action = 0;
        return shoppingItem;
      })
    );
    setTotalPrice(0);
  };

  const handleCheckOut = () => {
    setTotalPrice(
      shoppingList.reduce((acc, cur) => acc + cur.price * cur.action, 0)
    );
  };

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
          {items.map((item) => {
            return (
              <ShoppingRow
                key={item.id}
                name={item.name}
                price={item.price}
                action={item.action}
                handlePlus={() => handlePlus(item.id)}
                handleMinus={() => handleMinus(item.id)}
              />
            );
          })}
        </tbody>
      </table>
      <p>Total price: ${totalPrice}</p>
      <button onClick={handleCheckOut}>Checkout</button>
      <button onClick={handleEmptyCart}>Empty Cart</button>
    </div>
  );
}
