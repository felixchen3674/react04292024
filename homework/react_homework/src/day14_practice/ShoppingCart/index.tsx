import { useEffect, useState } from "react";

interface DataType {
  id: number;
  name: string;
  price: number;
  count: number;
}
const data: DataType[] = [
  { id: 1, name: "Apple", price: 0.99, count: 0 },
  { id: 2, name: "Banana", price: 0.49, count: 0 },
  { id: 3, name: "Mango", price: 1.99, count: 0 },
  { id: 4, name: "Strawberry", price: 2.49, count: 0 },
];

export default function ShoppingCart() {
  const [items, setItems] = useState<DataType[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.ok) {
          const res = await response.json();
          setItems(data);
        } else {
          throw new Error("something wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleItemDecrement = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id && item.count > 0) {
        const newItem = { ...item };
        newItem.count--;
        return newItem;
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const handleItemIncrement = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item };
        newItem.count++;
        return newItem;
      } else {
        return item;
      }
    });
    setItems(newItems);
  };

  const handlePrice = (items: DataType[]) => {
    return items
      .reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0)
      .toFixed(2);
  };

  const handleClearOut = () => {
    const newItems = items.map((item) => {
      if (item.count !== 0) {
        const newItem = { ...item };
        newItem.count = 0;
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  };
  const handleCheckOut = () => {
    // post request or something else
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div id="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={() => handleItemDecrement(item.id)}>
                        -
                      </button>
                      {item.count}
                      <button onClick={() => handleItemIncrement(item.id)}>
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
        <h2>Total Price:{handlePrice(items)}</h2>
      </div>
      <div>
        <button onClick={handleCheckOut}>Checkout</button>
        <button onClick={handleClearOut}>Empty Cart</button>
      </div>
    </div>
  );
}
