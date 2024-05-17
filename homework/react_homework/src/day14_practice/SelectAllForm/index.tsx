import React, { useState, ChangeEvent } from 'react';

interface Item {
  id : number;
  name : string;
  checked : boolean;
}

const itemList = ['Item 1', 'Item 2', 'Item 3'];

export default function SelectAllForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === 'all') {
      setSelected(selected.length === 3 ? [] : itemList);
    } else {
      setSelected((prevSelected) =>
        prevSelected.includes(value)
          ? prevSelected.filter((item) => item !== value)
          : [...prevSelected, value]
      );
    }
  };

  return (
    <div className="checkbox">
      <div>
        <strong>Selected Items: </strong>
        {selected.length > 0 ? selected.join(', ') : 'None'}
      </div>
      <div>
        <input
          type="checkbox"
          id="all"
          value="all"
          checked={selected.length === 3}
          onChange={handleChange}
        />
        <span>Select all</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="item1"
          value="Item 1"
          checked={selected.includes('Item 1')}
          onChange={handleChange}
        />
        <span>Item 1</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="item2"
          value="Item 2"
          checked={selected.includes('Item 2')}
          onChange={handleChange}
        />
        <span>Item 2</span>
      </div>
      <div>
        <input
          type="checkbox"
          id="item3"
          value="Item 3"
          checked={selected.includes('Item 3')}
          onChange={handleChange}
        />
        <span>Item 3</span>
      </div>
    </div>
  );
}
