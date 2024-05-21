import React, { useEffect, useState } from "react";

export default function List({ getItems }: { getItems: Function }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating Items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
