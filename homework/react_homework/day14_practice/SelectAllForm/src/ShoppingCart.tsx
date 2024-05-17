import {useState} from "react"
import "./ShoppingCart.css"

const fruits = [
  {id: 1, name: "Apple", price: 0.99},
  {id: 2, name: "Banana", price: 0.49},
  {id: 3, name: "Mango", price: 1.99},
  {id: 4, name: "Strawberry", price: 2.49},
]

export function ShoppingCart() {
  const [total, setTotal] = useState(0)

  function handleTotal(total) {
    setTotal(total)
  }

  function handleEmpty() {
    setTotal(0)
  }

  return (
    <>
      <h2>Shopping Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>${fruit.price}</td>
              <td>
                <Action
                  total={total}
                  fruit={fruit}
                  onHandleTotal={handleTotal}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ${total.toFixed(2)}</h3>
      <button>Checkout</button>
      <button onClick={handleEmpty}>Empty Cart</button>
    </>
  )
}

function Action({total, fruit, onHandleTotal}) {
  const [count, setCount] = useState(0)

  function handleDecrement() {
    if (count === 0) return
    const curCount = count - 1
    setCount(curCount)
    onHandleTotal(total + curCount * fruit.price)
  }

  function handleIncrement() {
    const curCount = count + 1
    setCount(curCount)
    onHandleTotal(total + curCount * fruit.price)
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      {total === 0 ? 0 : count}
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}
