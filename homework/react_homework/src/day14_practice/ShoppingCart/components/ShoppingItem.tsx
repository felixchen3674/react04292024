import React, { useState } from 'react';
interface ItemProp {
  name: string;
  price: number;
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export default function ShoppingItem({
  name,
  price,
  quantity,
  handleDecrement,
  handleIncrement,
}: ItemProp) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button onClick={handleDecrement}>-</button>

        {quantity}
        <button onClick={handleIncrement}>+</button>
      </td>
    </tr>
  );
}
