import React, { useState, ChangeEvent } from 'react';
import Checkbox from '../../day12_interactivity/ControlledComponents/Checkbox';

interface Item {
  value: string;
  isChecked: boolean;
}

export default function SelectAllForm() {
  const [items, setItems] = useState<Item[]>([
    { value: 'Item1', isChecked: false },
    { value: 'Item2', isChecked: false },
    { value: 'Item3', isChecked: false },
  ]);

  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const handleSelectAllChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsSelectedAll(checked);
    setItems(items.map((item) => ({ ...item, isChecked: checked })));
  };

  const handleItemChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      const newItems = [...items];
      newItems[index].isChecked = checked;
      setItems(newItems);
      setIsSelectedAll(newItems.every((item) => item.isChecked));
    };

  const selectedItems = items
    .filter((item) => item.isChecked)
    .map((item) => item.value);

  return (
    <div>
      <h1>All the selected items</h1>
      <Checkbox
        value="Select All"
        isChecked={isSelectedAll}
        onChange={handleSelectAllChange}
      />
      {items.map((item, index) => (
        <Checkbox
          key={index}
          value={item.value}
          isChecked={item.isChecked}
          onChange={handleItemChange(index)}
        />
      ))}
      <div>
        <h2>Selected Items:</h2>
        {selectedItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
