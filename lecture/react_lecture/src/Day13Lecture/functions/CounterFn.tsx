import React, { useEffect, useState } from "react";

// before 16.8 class components

export default function CounterFn() {
  const [count, setCount] = useState(0);
  // component did mount, with empty dep arr
  useEffect(() => {
    console.log("component did mount");
  }, []);

  // equivalent to componentDidUpdate
  useEffect(() => {
    console.log("component did update");
  });

  // only triggers when count updates
  useEffect(() => {
    console.log("count just updated");
  }, [count]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Counter</h3>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add Count</button>
    </div>
  );
}
