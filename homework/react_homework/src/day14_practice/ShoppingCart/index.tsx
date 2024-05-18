<<<<<<< HEAD
import React, {useState} from "react";

type Item  = {
  name : string;
  price : number;
  quantity : number;
}

export default function ShoppingCart() {
  // set initial states
  const [items, setItems] = useState<Item[]>([
    {name : 'Apple', price : 0.99, quantity : 0 },
    {name : 'Banana', price : 0.49, quantity : 0 },
    {name : 'Mango', price : 1.99, quantity : 0 },
    {name : 'Strawberry', price : 2.49, quantity : 0 },
  ])

  // increment quantity
  const increment = (index : number) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  }

  // decrement quantity
  const decrement = (index : number) => {
    const newItems = [...items];
    newItems[index].quantity -= 1;
    setItems(newItems);
  }

  // set total price
  const getTotalPrice = () => {
      return items.reduce((total, item) => total + item.price*item.quantity, 0).toFixed(2);
  }

  return (
    <div className="shopping-cart">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>
                            <button onClick={() => decrement(index)}>-</button>
                            {item.quantity}
                            <button onClick={() => increment(index)}>+</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button>Checkout</button>
        <div className="total-price">Total price: ${getTotalPrice()}</div>
        <button onClick={() => setItems(items.map(item => ({ ...item, quantity: 0 })))}>Empty Cart</button>
    </div>
);
=======
import Solution from "./Solution";

export default function ShoppingCart() {
  return (
    <div>
      <Solution />
    </div>
  );
>>>>>>> 66e2cc0 (shopping cart)
}
