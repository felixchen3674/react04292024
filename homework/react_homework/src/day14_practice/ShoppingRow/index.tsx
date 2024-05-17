import React from 'react'

interface ShoppingRowProps {
    name: string,
    price: number,
    action: number,
    handlePlus: () => void,
    handleMinus: () => void
}

export default function ShoppingRow({ name, price, action, handlePlus, handleMinus}: ShoppingRowProps) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td><button onClick={handleMinus}>-</button>{action}<button onClick={handlePlus}>+</button></td>
      </tr>
    </>
  )
}
