import React, { useEffect, useState } from "react";

interface Item {
  id:number;
  name:string;
  price:number;
  quant:number
}

async function mockApiCall(){
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const data = [
    {id:1, name:"Apply", price: 0.99, quant:0},
    {id:2, name:"Banana", price: 0.49, quant:0},
    {id:3, name:"Mango", price: 1.99, quant:0},
    {id:4, name:"Strawberry", price: 1.49, quant:0},
  ]
  return data;
}

export default function ShoppingCart() {
  const [fruits, setFruits] = useState<Item[]>([])

  useEffect(()=>{
    const getData = async () => {
      const data = await mockApiCall();
      setFruits(data);
    };
    getData();
  },[])

  const handleQuantDown = (fruitId:number) => {
    setFruits((prevQuant)=>
      prevQuant.map((item)=>
        item.id === fruitId?
        ({...item, quant: Math.max(0, item.quant-1)}) : item
      )
    )
  }

  const handleQuantUp = (fruitId:number) => {
    setFruits((prevQuant)=>
      prevQuant.map((item)=>
        item.id === fruitId?
        ({...item, quant: item.quant+1}) : item
      )
    )
  }

  const totalPrice = fruits.reduce((acc, fruit) => acc + (fruit.price * fruit.quant),0).toFixed(2)

  const handleResetQuant = () => {
    setFruits(fruits.map((fruit)=>
      ({...fruit, quant:0})
    ))
  }

  return (
    <>
      <table style={{border: "1px solid black"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit)=>
            <tr key={fruit.id}>
              <td>{fruit.name}</td>
              <td>{fruit.price}</td>
              <td>
                <div key={fruit.id}>
                  <button onClick={()=>handleQuantDown(fruit.id)}>-</button>
                  {fruit.quant}
                  <button onClick={()=>handleQuantUp(fruit.id)}>+</button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p>
        Total Price ${totalPrice}
      </p>
      <button>Check Out</button>
      <button onClick={handleResetQuant}>Empty Cart</button>
    </>
  );
}
