// import { useState } from "react";

import { useState } from "react";

// export default function ShoppingCart() {
//   const [appleCount, setAppleCount] = useState(0);
//   const [bananaCount, setBananaCount] = useState(0);
//   const [mangoCount, setMangoCount] = useState(0);
//   const [strawbeeryCount, setStrawberryCount] = useState(0);
//   const [sum, setSum] = useState(0);

//   const handleItemDecrement = (e) => {
//     if (e.target.name === "banana") {
//       if (bananaCount > 0) {
//         setBananaCount((pre) => pre - 1);
//       }
//     } else if (e.target.name === "apple") {
//       if (appleCount > 0) {
//         setAppleCount((pre) => pre - 1);
//       }
//     } else if (e.target.name === "mango") {
//       if (mangoCount > 0) {
//         setMangoCount((pre) => pre - 1);
//       }
//     } else if (e.target.name === "strawberry") {
//       if (strawbeeryCount > 0) {
//         setStrawberryCount((pre) => pre - 1);
//       }
//     }
//   };
//   const handleItemIncrement = (e) => {
//     if (e.target.name === "banana") {
//       setBananaCount((pre) => pre + 1);
//     } else if (e.target.name === "apple") {
//       setAppleCount((pre) => pre + 1);
//     } else if (e.target.name === "mango") {
//       setMangoCount((pre) => pre + 1);
//     } else if (e.target.name === "strawberry") {
//       setStrawberryCount((pre) => pre + 1);
//     }
//   };
//   return (
//     <div>
//       <h1>ShoppingCart</h1>
//       <div>
//         <table id="shoppingTable">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Apple</td>
//               <td>$0.99</td>
//               <td>
//                 <button name="apple" onClick={handleItemDecrement}>
//                   -
//                 </button>
//                 {appleCount}
//                 <button name="apple" onClick={handleItemIncrement}>
//                   +
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td>Banana</td>
//               <td>$0.49</td>
//               <td>
//                 <button name="banana" onClick={handleItemDecrement}>
//                   -
//                 </button>
//                 {bananaCount}
//                 <button name="banana" onClick={handleItemIncrement}>
//                   +
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td>Mango</td>
//               <td>$1.99</td>
//               <td>
//                 <button name="mango" onClick={handleItemDecrement}>
//                   -
//                 </button>
//                 {mangoCount}
//                 <button name="mango" onClick={handleItemIncrement}>
//                   +
//                 </button>
//               </td>
//             </tr>
//             <tr>
//               <td>Strawberry</td>
//               <td>$2.49</td>
//               <td>
//                 <button name="strawberry" onClick={handleItemDecrement}>
//                   -
//                 </button>
//                 {strawbeeryCount}
//                 <button name="strawberry" onClick={handleItemIncrement}>
//                   +
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div>
//         <h1>Total Price:{sum}</h1>
//       </div>
//       <div>
//         <button>checkout</button> <button>Empty Cart</button>
//       </div>
//     </div>
//   );
// }

const items = [
  { name: "Apple", price: 0.99 },
  { name: "Banana", price: 0.49 },
  { name: "Mango", price: 1.99 },
  { name: "Strawberry", price: 2.49 },
];

export default function ShoppingCart() {
  const [itemsCount, setItemsCount] = useState(items.map(() => 0));

  const handleItemDecrement = () => {};
  const handleItemIncrement = () => {};
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
              items.map((item, index) => {
                return (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button onClick={handleItemDecrement(index)}>-</button>
                      {itemsCount[index]}
                      <button onClick={handleItemIncrement(index)}>+</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
