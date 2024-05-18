import React, { useState } from 'react';
import ShoppingItem from './components/ShoppingItem';

const shoppingItems = [
  { id: 1, name: 'Apple', price: 0.99 },
  { id: 2, name: 'Banana', price: 0.49 },
  { id: 3, name: 'Mango', price: 1.99 },
  { id: 4, name: 'Strawberry', price: 2.49 },
];

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
// dont know how to implement async mock call

export default function ShoppingCart() {
  const [items, setItems] = useState<Item[]>(
    shoppingItems.map((item) => {
      return { ...item, quantity: 0 };
    })
  );

  const handleIncrement = (id: number) => {
    const newItems = items.map((item) => {
      return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
    });
    setItems(newItems);
  };

  const handleDecrement = (id: number) => {
    const newItems = items.map((item) => {
      return item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });
    setItems(newItems);
  };

  const handleEmptyCart = () => {
    const newItems = items.map((item) => {
      return { ...item, quantity: 0 };
    });
    setItems(newItems);
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {items.map((item) => {
          return (
            <ShoppingItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              handleDecrement={() => handleDecrement(item.id)}
              handleIncrement={() => handleIncrement(item.id)}
            />
          );
        })}
      </table>
      <p>TotalPrice:{totalPrice.toFixed(2)}</p>
      <div>
        <button>Checkout</button>
        <button onClick={handleEmptyCart}>Empty Cart</button>
      </div>
    </>
  );
}
