import React, { useState } from "react";
interface Item {
  id: number;
  name: string;
  isSelected: boolean;
}

export default function SelectAllForm() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "item1", isSelected: false },
    { id: 2, name: "item2", isSelected: false },
    { id: 3, name: "item3", isSelected: false },
  ]);

  const handleSelectItem = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleSelectAll = (selectAll: boolean) => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, isSelected: selectAll }))
    );
  };

  const selectedItems = items.filter((item) => item.isSelected);

  return (
    <div>
      <h2>Select All Form</h2>
      <p>Selected Items: {selectedItems.map((item) => item.name).join(", ")}</p>
      <label>
        <input
          type="checkbox"
          checked={selectedItems.length === items.length}
          onChange={() => handleSelectAll(!selectedItems.length)}
        />
        Select All
      </label>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isSelected}
              onChange={() => handleSelectItem(item.id)}
            />
            <label onClick={() => handleSelectItem(item.id)}>
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}