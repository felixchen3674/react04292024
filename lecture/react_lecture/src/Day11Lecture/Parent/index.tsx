import { useState } from "react";

const styles = {
  border: {
    border: "1px solid white",
    padding: "5px",
  },
};

export default function Parent() {
  const [parentCount, setParentCount] = useState(0);
  console.log("Parent renders");
  const handleAdd = () => {
    setParentCount(parentCount + 1);
  };

  return (
    <div style={styles.border}>
      <h2>Parent: {parentCount}</h2>
      <button onClick={handleAdd}>Add Parent Count</button>
      <Child parentCount={parentCount} updateParentCount={handleAdd} />
    </div>
  );
}

interface ChildProps {
  parentCount: number;
  updateParentCount: () => void;
}

function Child({ parentCount, updateParentCount }: ChildProps) {
  const [count, setCount] = useState(0);
  console.log("Child renders");
  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div style={styles.border}>
      <h3>Child Count: {count}</h3>
      <h3>Parent Count: {parentCount}</h3>
      <button onClick={handleAdd}>Add Child Count</button>
      <button onClick={updateParentCount}>Add Parent Count</button>
    </div>
  );
}
