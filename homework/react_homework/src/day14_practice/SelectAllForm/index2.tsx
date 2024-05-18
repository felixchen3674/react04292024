import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
  isSelected: boolean;
}

const itemList: Item[] =[
  { id: 1, name: "item1", isSelected: false },
  { id: 2, name: "item2", isSelected: false },
  { id: 3, name: "item3", isSelected: false },
]
//Better to have the initial values outside the useState function as it is easier to read.

function SelectAllForm2() {
  const [items, setItems] = useState<Item[]>(itemList);

  const handleSelectedItem = (itemId: number) => {
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


  const IsSelectedTrue = items.filter((item) => item.isSelected);
  //this shows all the item inside items that has true isSelected value as an array

  return (
    <div>
      <h2>Select All Form</h2>
      <p>Select Item {IsSelectedTrue.map((item) => item.name).join(", ")}</p>
      <label>
        <input
          type="checkbox"
          checked={IsSelectedTrue.length === items.length}
          onChange={() => handleSelectAll(!IsSelectedTrue.length)}
        />
        Select All
      </label>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={items.length === IsSelectedTrue.length}
              onChange={() => handleSelectedItem(item.id)}
            />
            <label onClick={() => handleSelectedItem(item.id)}>
              {item.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectAllForm2;
