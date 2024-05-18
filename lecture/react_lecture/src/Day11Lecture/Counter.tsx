import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter rendered");

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>Count: {count} </div>
      <button onClick={handleAdd}>Add Count</button>
    </div>
  );
}

{
  /* <div>
    <h2>Counter</h2>
    <div>Count: {20} </div>
    <button onClick={handleAdd}>Add Count</button>
</div>

<div>
    <h2>Counter</h2>
    <div>Count: {21} </div>
    <button onClick={handleAdd}>Add Count</button>
</div> */
}
