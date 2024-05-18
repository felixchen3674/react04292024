import React, { useState, ChangeEvent } from 'react';
import Checkbox from '../../day12_interactivity/ControlledComponents/Checkbox';

interface Item {
  id: number;
  value: string;
  isChecked: boolean;
}
const itemsList = [
  { id: 1, value: 'Item1', isChecked: false },
  { id: 2, value: 'Item2', isChecked: false },
  { id: 3, value: 'Item3', isChecked: false },
];
export default function SelectAllForm() {
  const [items, setItems] = useState<Item[]>(itemsList);

  const isSelectedAll = items.every((item) => item.isChecked);

  const handleSelectAll = () => {
    setItems(
      items.map((item) => {
        return { ...item, isChecked: !isSelectedAll };
      })
    );
  };

  const handleItemChange = (id: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
        }
        return item;
      })
    );
  };

  const selectedItems = items.filter((item) => item.isChecked);

  return (
    <div>
      <Checkbox
        value="Selected All"
        isChecked={isSelectedAll}
        onChange={handleSelectAll}
      />
      {items.map((item) => {
        return (
          <Checkbox
            key={item.id}
            value={item.value}
            isChecked={item.isChecked}
            onChange={() => handleItemChange(item.id)}
          />
        );
      })}
      {selectedItems.map((selectedItem) => (
        <p key={selectedItem.id}>{selectedItem.value}</p>
      ))}
    </div>
  );
}
